# NameGeneratorGPT

## Description

NameGeneratorGPT is a learning tool for interacting with the OpenAI API. It uses Node.js to generate unique names for newborn children, inspired by classical masterpieces. The application also provides the context and meaning of the names.

## Installation

To install and run NameGeneratorGPT, follow these steps:

1. Clone the repository: `git clone https://github.com/matthewhou19/NameGeneratorGPT.git`
2. Navigate to the project directory: `cd NameGeneratorGPT`
3. Install the dependencies: `npm install`
4. Create a new `.env` file in the root directory and add your OpenAI API key in the format: `Openai_API=your_api_key`

## Usage

To use NameGeneratorGPT, start the application with `npm start` and navigate to `http://localhost:1234` in your browser.

## Example

Here's a simplified example of how to interact with the OpenAI API using NameGeneratorGPT:

```javascript
import { Configuration, OpenAIApi } from "openai";

export const configuration = new Configuration({
  apiKey: process.env.Openai_API,
});

export const openai = new OpenAIApi(configuration);

export const generateReply = async function (
  propmt: string
): Promise<void | string> {
  const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: propmt,
      max_tokens: 1257,
      temperature: 0.3,
  });
  return completion.data.choices[0].text!;
};
```

This code snippet demonstrates how to set up the OpenAI API and generate a reply from a given prompt. For more information on OpenAI API libraries, visit [OpenAI Community Libraries](https://platform.openai.com/docs/libraries/community-libraries).

## Contributing

Contributions to NameGeneratorGPT are welcome! Feel free to [open an issue](https://github.com/matthewhou19/NameGeneratorGPT/issues) or submit a pull request.

## License

NameGeneratorGPT is open source and available under the [MIT License](https://chat.openai.com/LICENSE).
