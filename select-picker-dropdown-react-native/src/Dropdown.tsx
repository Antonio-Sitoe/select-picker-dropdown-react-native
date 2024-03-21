import { FC, ReactElement, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native'

import Arrows from './assets/caret-up-down.svg'

interface IOption { value: string, label: string }

interface IrenderItemProps {
  item: IOption
}

interface IPositionProps {
  left: number
  width: number
}
interface SelectProps {
  options: IOption[]
  value: IOption
  onChange(option: IOption): void
  showIconArrow?: boolean
  iconArrowColor?: string
  // style props
  activeTintColor: string
  activeTextTintColor: string
  selectStyle?: StyleProp<ViewStyle> | undefined,
  dropdownItemStyle?: StyleProp<ViewStyle> | undefined,
  dropdownStyle?: StyleProp<ViewStyle> | undefined,
  selectTextStyle?: StyleProp<TextStyle> | undefined;
  dropDownItemTextStyle?: StyleProp<TextStyle> | undefined;
}


export const Select: FC<SelectProps> = ({
  value,
  onChange,
  options,
  showIconArrow = false,
  iconArrowColor = "#181818",
  activeTintColor = '#efefef',
  activeTextTintColor,
  selectStyle,
  selectTextStyle,
  dropdownStyle,
  dropdownItemStyle,
  dropDownItemTextStyle
}) => {
  const selectRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  const [dropdownTop, setDropdownTop] = useState(0)
  const [elementPosition, setElementPositon] = useState<IPositionProps>({ width: 0, left: 0 })

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown()
  }
  const closeDropdown = (): void => {
    setVisible(false)
  }

  const openDropdown = (): void => {
    selectRef.current?.measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      setDropdownTop(py + h * 1.7)
      setElementPositon({ left: _px, width: _w })
    })
    setVisible(true)
  }

  const onItemPress = (item: IOption): void => {
    onChange(item)
    setVisible(false)
  }

  const renderItem = ({ item }: IrenderItemProps): ReactElement<any, any> => (
    <TouchableOpacity style={[styles.item, dropdownItemStyle, {
      backgroundColor: item.value === value.value ? activeTintColor : '',
      borderRadius: 6
    }]} onPress={() => onItemPress(item)}>
      <Text style={[dropDownItemTextStyle, item.value === value.value && { color: activeTextTintColor }]}>{item.label}</Text>
    </TouchableOpacity>
  )

  const renderDropdown = (): ReactElement<any, any> => {
    const { left, width } = elementPosition
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={closeDropdown}
        >
          <View style={[styles.dropdown, dropdownStyle, { top: dropdownTop, width, left }]}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return (
    <TouchableOpacity
      ref={selectRef}
      style={[styles.button, selectStyle]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={[styles.buttonText, selectTextStyle]}>
        {value.label}
      </Text>
      {showIconArrow && <Arrows fill={iconArrowColor} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 36,
    width: 'auto',
    borderRadius: 6,
    paddingHorizontal: 10,
    zIndex: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fefefe'
  },
  buttonText: {
    flex: 1,
    textAlign: 'left'
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    marginTop: -20,
    borderRadius: 6,
    left: 0,
    elevation: 2,

  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})


