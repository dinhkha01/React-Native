# Contacts Manager App

This is a React Native application that allows users to manage their contacts. Users can view, add, edit, and delete contacts, with all data being stored persistently using AsyncStorage.

## Features

- View a list of contacts
- Add new contacts
- Edit existing contacts
- Delete contacts
- Persistent data storage using AsyncStorage

## Project Structure

```
contacts-manager-app
├── src
│   ├── components
│   │   ├── ContactList.tsx       # Displays the list of contacts
│   │   ├── ContactForm.tsx       # Form for adding/editing contacts
│   │   └── ContactItem.tsx       # Represents a single contact item
│   ├── screens
│   │   ├── HomeScreen.tsx        # Main screen displaying contacts
│   │   ├── AddContactScreen.tsx   # Screen for adding a new contact
│   │   ├── EditContactScreen.tsx  # Screen for editing a contact
│   │   └── ContactDetailScreen.tsx # Screen for viewing contact details
│   ├── storage
│   │   └── contactsStorage.ts     # Functions for managing contacts in AsyncStorage
│   ├── types
│   │   └── index.ts               # TypeScript interfaces for contact structure
│   └── App.tsx                    # Entry point of the application
├── package.json                   # npm configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd contacts-manager-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:
```
npm start
```

This will start the Metro bundler, and you can then run the app on your preferred device or emulator.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.