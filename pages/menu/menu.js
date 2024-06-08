import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import Foodlist from './foodlist';
import food from './../../food.json';
import { Ionicons } from '@expo/vector-icons'; // Ionicons'u içe aktarın
import { useNavigation } from '@react-navigation/native';

function Menu() {
  const menuSections = food.menu_sections;
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const navigation = useNavigation();

  const filterMenu = (section) => {
    if (!selectedFilter || section.section_name === selectedFilter) {
      return true;
    }
    return false;
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setIsFilterModalVisible(true)} style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={() => setIsFilterModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Filter</Text>
            <ScrollView>
              <TouchableOpacity onPress={() => { setSelectedFilter(null); setIsFilterModalVisible(false); }} style={styles.modalFilterOption}>
                <Text style={styles.modalFilterText}>All</Text>
              </TouchableOpacity>
              {menuSections.map((section) => (
                <TouchableOpacity key={section.id} onPress={() => { setSelectedFilter(section.section_name); setIsFilterModalVisible(false); }} style={styles.modalFilterOption}>
                  <Text style={styles.modalFilterText}>{section.section_name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {menuSections.map((section) => (
        <View key={section.id} style={{ display: filterMenu(section) ? 'flex' : 'none' }}>
          <Text style={styles.header}>{section.section_name}</Text>
          <Foodlist dishes={section.dishes} navigation={navigation} />
        </View>
      ))}

      <View style={{ display: selectedFilter === 'İçecekler' ? 'flex' : 'none' }}>
        <Text style={styles.header}>İçecekler</Text>
        <Foodlist dishes={menuSections.find((section) => section.section_name === 'İçecekler').dishes} navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  filterButtonText: {
    fontSize: 16,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalFilterOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  modalFilterText: {
    fontSize: 16,
  },
  header: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
});

export default Menu;
