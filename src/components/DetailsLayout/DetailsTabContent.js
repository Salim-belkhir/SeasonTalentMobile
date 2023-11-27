import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import FlatList from "../FlatList";
import Typography from "../Typography";

const DetailsTabContent = ({ data, type }) => {
  const TABS = [
    { name: "description", label: "Description" },
    { name: "skills", label: "Compétences" },
  ];

  if (type !== "candidate") {
    TABS.push({ name: "advantages", label: "Avantages" });
  } else {
    TABS.push({ name: "experiences", label: "Avis" });
  }

  const [activeTab, setActiveTab] = useState(TABS[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerInformationsTab}>
        {TABS.map((tab, index) => (
          <Typography
            key={index}
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

      {renderTabContent(data[activeTab], activeTab)}
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
  reviewList: {
    marginTop: 20,
  },
});

const renderTabContent = (tabData, tabName) => {
  return (
    <View style={styles.tabContent}>
      {tabName === "description" ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.descriptionContainer}
        >
          <Typography type="l_regular">{tabData}</Typography>
        </ScrollView>
      ) : tabName === "experiences" ? (
        tabData.length > 0 ? (
          <FlatList
            items={tabData}
            type="reviews"
            listStyle={styles.reviewList}
          />
        ) : (
          <View style={styles.tabContentList}>
            <Typography
              type="l_medium"
              typographyStyle={{ color: Colors.main_grey }}
            >
              Aucun avis donné pour le moment .
            </Typography>
          </View>
        )
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
