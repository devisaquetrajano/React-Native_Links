import { colors } from "@/styles/colors";
import { Stack } from "expo-router";



export default function layout(){

    const backgroundColor = colors.gray[950]
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor}
    }}/>
}