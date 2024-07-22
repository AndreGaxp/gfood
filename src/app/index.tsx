import { View, ScrollView } from "react-native";
//DEFININDO A ALTURA DA STATUS BAR
import Constants from "expo-constants";
import Section from "../components/section";

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 20 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja mais"
        action={() => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
      />

      <TrendingFoods />

      <Section
        name="Famosos no GFood"
        label="Veja mais"
        action={() => console.log("CLICOU NO FAMOSOS")}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        label="Veja mais"
        action={() => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />

      <RestaurantVerticalList />
    </ScrollView>
  );
}
