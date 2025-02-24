import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
        borderRadius: 8,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
});