require("react-native-mock-render/mock");
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/*eslint no-console: */
console.error = jest.fn();
