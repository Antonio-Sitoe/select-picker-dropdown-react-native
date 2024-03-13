import { FC, ReactElement, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native'


import Arrows from './assets/caret-up-down.svg'




interface SelectProps {
  label: string
  data: Array<{ label: string; value: string }>
  onSelect: (item) => void
  right?: number
}

export const Select: FC<SelectProps> = ({ label, data, onSelect, right = 130, style = { width }, width = 160 }) => {
  const selectRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  const [dropdownTop, setDropdownTop] = useState(0)
  const [coords, setCoords] = useState({ w: 0, h: 0 })

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown()
  }

  const openDropdown = (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    selectRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h * 1.8)
      setCoords({ h: _px, w: _w })
    })
    setVisible(true)
  }

  const onItemPress = (item): void => {
    onSelect(item)
    setVisible(false)
  }

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity style={[styles.item, {
      backgroundColor: item.value === label.value ?'#efefef':''
    }]} onPress={() => onItemPress(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  )

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop, margin: 'auto', width: coords.w, left: coords.h }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return (
    <TouchableOpacity
      ref={selectRef}
      style={[style.select, styles.button]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {label.label}
      </Text>
      <Arrows size={16} color='#efefef' />
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
    elevation: 2
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: '',
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
    elevation: 2
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    fontFamily: '',
  },
})


