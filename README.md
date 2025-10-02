# ADAPT
### An Interactive Playbook for Windows Active Directory Pentesting

[![Status: Development](https://img.shields.io/badge/status-in%20development-blue.svg)](https://github.com/SitanshuKapur/adapt)

ADAPT (Active Directory Attack Path Tracer) is an interactive desktop application designed to streamline Active Directory assessments. It acts as a guided playbook, a quick-reference tool arsenal, and a knowledge base, all in one. It's built for penetration testers to track engagements, prioritize easy wins, and follow the path of least resistance from initial foothold to Domain Admin.

---


---

## Key Features

* **Engagement Tracker:** An interactive checklist organized by attack phases (Recon, Foothold, Priv Esc, etc.). Progress is saved automatically to the filesystem.
* **The Arsenal:** A searchable database of common AD pentesting tools (BloodHound, Mimikatz, Impacket, etc.) with quick setup commands and common usage examples.
* **Knowledge Base:** A reference module explaining core AD concepts, attack theory (e.g., Kerberoasting, Golden Tickets), and mitigation advice for reporting.

---

## Tech Stack

* **Core Framework:** [Tauri](https://tauri.app/) (Rust backend)
* **Frontend:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Package Manager:** [Yarn](https://yarnpkg.com/)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* **Rust:** Follow the instructions at [rust-lang.org](https://www.rust-lang.org/tools/install)
* **Node.js & Yarn:** Install Node.js (preferably via [nvm](https://github.com/nvm-sh/nvm)) and enable [Corepack](https://yarnpkg.com/corepack) to use Yarn.
* **Tauri Prerequisites:** Follow the guide for your OS at [tauri.app/start/prerequisites/](https://tauri.app/start/prerequisites/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SitanshuKapur/adapt.git](https://github.com/SitanshuKapur/adapt.git)
    cd adapt
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    yarn tauri dev
    ```

---


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)