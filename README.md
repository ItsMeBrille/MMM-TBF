# MMM-TBF

### Introduction

MMM-TBF is a MagicMirror2 module that displays abbreviations and their full form from a JSON data file. The abbreviations are shown in a randomized order, making it an interactive and educational addition to your MagicMirror2 setup. TBF is short for the Norwegian word Trebokstavsforkortelse, Three word abbreviation

### Installation

1. Navigate to your MagicMirror's `modules` directory:

   ```shell
   cd ~/MagicMirror/modules
   ```

2. Clone the MMM-TBF repository:

   ```shell
   git clone https://github.com/ItsMeBrille/MMM-TBF.git
   ```

### Configuration

To use MMM-TBF, add it to your MagicMirror configuration file (usually located at `config/config.js`):

```javascript
{
  module: "MMM-TBF",
  position: "top_bar", // Adjust the position as needed
  config: {
    // Optional configuration options:
    // updateInterval: 15000, // Update interval in milliseconds (default: 15 seconds)
    // url: "wordlist.json", // URL to the JSON data file (default: wordlist.json)
    // randomOrder: true, // Display words in random order (default: true)
  }
},
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.