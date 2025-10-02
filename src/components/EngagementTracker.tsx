import React, { useState, useEffect } from 'react';
import { playbookData, PlaybookPhase } from '../data/playbook';

// NEW: Import Tauri's filesystem and path APIs
import { BaseDirectory, writeTextFile, readTextFile, exists } from '@tauri-apps/api/fs';
import { appDataDir } from '@tauri-apps/api/path';

const SAVE_FILE_NAME = 'engagement.json';

export function EngagementTracker() {
  const [phases, setPhases] = useState<PlaybookPhase[]>(playbookData);

  // NEW: This useEffect hook runs ONCE when the component first loads
  useEffect(() => {
    const loadProgress = async () => {
      // Check if a save file already exists
      const fileExists = await exists(SAVE_FILE_NAME, { dir: BaseDirectory.AppData });
      if (fileExists) {
        // If it exists, read the file
        const savedData = await readTextFile(SAVE_FILE_NAME, { dir: BaseDirectory.AppData });
        // Parse the JSON and update our component's state
        setPhases(JSON.parse(savedData));
      }
    };
    loadProgress();
  }, []); // The empty array [] means this effect only runs on the first render

  // NEW: This useEffect hook runs EVERY TIME the 'phases' state changes
  useEffect(() => {
    const saveProgress = async () => {
      // Convert the current state to a JSON string and save it
      await writeTextFile(SAVE_FILE_NAME, JSON.stringify(phases, null, 2), {
        dir: BaseDirectory.AppData,
      });
    };
    saveProgress();
  }, [phases]); // This effect runs whenever the 'phases' variable changes

  const handleToggle = (phaseId: number, itemId: number) => {
    const newPhases = phases.map((phase) => {
      if (phase.id === phaseId) {
        const newItems = phase.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });
        return { ...phase, items: newItems };
      }
      return phase;
    });
    setPhases(newPhases);
  };

  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <details key={phase.id} className="bg-gray-700 rounded-lg" open>
          <summary className="p-4 font-bold text-lg cursor-pointer">
            {phase.title}
          </summary>
          <div className="p-4 border-t border-gray-600">
            <div className="space-y-3">
              {phase.items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(phase.id, item.id)}
                    className="h-5 w-5 rounded bg-gray-800 border-gray-500 text-blue-500 focus:ring-blue-600"
                  />
                  <span className={item.completed ? 'line-through text-gray-400' : ''}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}