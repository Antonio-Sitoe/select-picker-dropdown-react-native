## Select Component

The Select component is a customizable dropdown menu for React Native applications.

### Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import { Select } from 'select-picker-dropdown-react-native';

const MyComponent = () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        showIconArrow={true}
        activeTintColor="#efefef"
        activeTextTintColor="#181818"
        selectStyle={{ width: 200 }}
        dropdownStyle={{ width: 200 }}
        dropdownItemStyle={{ backgroundColor: 'blue' }}
        selectTextStyle={{ color: 'red' }}
        dropDownItemTextStyle={{ color: 'green' }}
      />
    </View>
  );
};

export default MyComponent;
```

### Props

- `options` (required): An array of objects containing `value` and `label` properties representing the dropdown options.
- `value` (required): The currently selected option.
- `onChange` (required): A function that will be called when an option is selected.
- `showIconArrow`: Boolean to show or hide the dropdown arrow icon. Default is `false`.
- `iconArrowColor`: Color for the dropdown arrow icon. Default is `#181818`.
- `activeTintColor`: Background color for the selected option.
- `activeTextTintColor`: Text color for the selected option.
- `selectStyle`: Custom styles for the select container.
- `selectTextStyle`: Custom styles for the select text.
- `dropdownStyle`: Custom styles for the dropdown container.
- `dropdownItemStyle`: Custom styles for the dropdown item container.
- `dropDownItemTextStyle`: Custom styles for the dropdown item text.

### How to Contribute

Contributions are welcome! If you'd like to contribute to this project, you can:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

Please make sure to follow the existing coding style and add appropriate tests if applicable.
