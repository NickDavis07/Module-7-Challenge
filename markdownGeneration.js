
//function generates the license badge and formats it the proper html for the given license selected. Leveraged help from ChatGPT to solve for the License Badge portion.
function generateLicenseBadge(license) {
    if (license && license !== 'None') {
        return `![License Badge](https://img.shields.io/badge/license-${license.replace(/\s+/g, '_')}-blue)`;
    }
    return '';
}
//Markdown Generation function, exported to the index.js and called in the init function.
export default function markdownGeneration(data) {
    const licenseBadge = generateLicenseBadge(data.license);
//below is the formatting of the README and adding the data gathered from the questions.
    return `
# ${data.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Features
${data.features}

## Tests
${data.tests}

## Credits
${data.credits}

## License
${data.license}

## Questions
For any questions, please reach out to me on Github or email:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}