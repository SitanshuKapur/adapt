// Defines the shape of a single checklist item
export interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

// Defines the shape of a whole phase of the playbook
export interface PlaybookPhase {
  id: number;
  title: string;
  items: ChecklistItem[];
}

// This is our actual playbook data
export const playbookData: PlaybookPhase[] = [
  {
    id: 1,
    title: 'Phase 1: Initial Reconnaissance (Easy Wins)',
    items: [
      { id: 101, text: 'Identify Domain Controllers', completed: false },
      { id: 102, text: 'Enumerate domain users with LDAP', completed: false },
      { id: 103, text: 'Check for AS-REP Roasting', completed: false },
      { id: 104, text: 'Scan for open SMB shares', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Phase 2: Gaining a Foothold',
    items: [
      { id: 201, text: 'Perform password spraying', completed: false },
      { id: 202, text: 'Exploit a known vulnerability', completed: false },
      { id: 203, text: 'Analyze found credentials from recon phase', completed: false },
    ],
  },
];