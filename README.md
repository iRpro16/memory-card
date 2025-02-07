# Memory card game

This project is part of The Odin Project curriculum. It is a game that involves choosing cards that haven't been chosen, which tests your memory. If you chose a card that has already been chosen, you lose and the game restarts.

## Installation
To run this project locally, follow these steps:
1. Clone the repository
```
git clone [https://github.com/iRpro16/memory-card.git]
```

2. Navigate to the project directory:
```
cd memory-card
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

## Usage
1. Open the application in your browser at http://localhost:3000.
2. Test your memory and try to get the best score!

## Learning outcomes
* useRef: Learning when to use 'useRef' hook over 'useState'.
* API fetching: Display images by fetching API.
* useEffect: Using useEffect to handle external systems.

## Challenges and solutions:
### using useRef
Challenge: Had two variables that needed to get updated through 'useState' in same component, which caused issues due to re-rendering.\
Solution: Substituting 'useState' for 'useRef', so that upon variable update there is no re-render. Instead re-render was caused by a single other variable.

### cleanup function
Challenge: Getting the proper cleanup function to prevent memory leaks.\
Soluton: Utilizing an boolean 'active' variable, so that on false it there are no more state updates from the old fetch.

## Conclusion
This project was a great learning experience, enhancing my skills for API handling and the 'useEffect' hook. 

## Acknowledgments
Thanks to The Odin Project for providing comprehensive resources and project ideas.
