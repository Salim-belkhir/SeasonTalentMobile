import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "~/theme";
import Typography from "../Typography";

const TABS = [
  { name: "description", label: "Description" },
  { name: "advantages", label: "Avantages" },
  { name: "skills", label: "Compétences" },
];

const DetailsTabContent = ({ data }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = (tabName) => {
    const tabData = data[tabName];
    return (
      <View style={styles.tabContent}>
        {tabName === "description" ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.descriptionContainer}
          >
            <Typography type="l_regular">{tabData}</Typography>
          </ScrollView>
        ) : (
          <View style={styles.tabContentList}>
            {tabData.map((item, index) => (
              <View style={styles.tabContentTextContainer} key={index}>
                <Typography type="l_medium">{item.label}</Typography>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerInformationsTab}>
        {TABS.map((tab) => (
          <Typography
            key={tab.name}
            type="l_bold"
            typographyStyle={[
              styles.tabTitle,
              activeTab === tab.name && styles.activeTabTitle,
            ]}
            onPress={() => handleTabClick(tab.name)}
          >
            {tab.label}
          </Typography>
        ))}
      </View>

      {renderTabContent(activeTab)}
    </View>
  );
};

export default DetailsTabContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
    marginTop: 20,
  },
  descriptionContainer: {
    height: "85%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.medium_grey,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerInformationsTab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  tabTitle: {
    color: Colors.main_grey,
  },
  activeTabTitle: {
    color: Colors.primary_color,
    fontWeight: "bold",
  },
  tabContent: {
    marginTop: 20,
  },
  tabContentList: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  tabContentTextContainer: {
    backgroundColor: Colors.pure_white,
    borderRadius: 8,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    margin: 5,
  },
});
