/* eslint-disable jsx-a11y/accessible-emoji */
import { Select } from '@personal/ui';
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [select, setSelect] = useState({ value: 'pt', label: 'Português' })
  const data = [
    { value: 'pt', label: 'Português' },
    { value: 'em', label: 'Emakhwua' },
    { value: 'shim', label: 'Shimakonde' },
  ]
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,

        }}
      >
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}

          contentContainerStyle={{
            padding: 20,
            backgroundColor: '#121214',
            flexGrow: 1
          }}
        >

          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text
              style={[styles.textXL, styles.appTitleText]}
              testID="heading"
              role="heading"
            >
              Welcome SelectPickerDropdown 👋
            </Text>
          </View>
          <Select
            options={data}
            value={select}
            showIconArrow
            onChange={(value) => setSelect(value)}
            activeTintColor='#2F6846'
            activeTextTintColor='#fefefe'
            selectStyle={{
              backgroundColor: '#202024',
              borderWidth: 0
            }}
            selectTextStyle={{
              color: '#fefefe',
              textAlign: 'center',
              paddingLeft: 15
            }}
            iconArrowColor='white'
            dropdownStyle={{
              backgroundColor: '#202024',
            }}
            dropDownItemTextStyle={{
              color: 'white',
              textAlign: 'center',
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
    color: 'white'
  },
  textXL: {
    fontSize: 48,
    color: 'white'
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
