import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Price({ price, discount }) {

    const calcPrice = (price, discount) => {
        if (!discount) return price

        const discountAmount = (price * discount) / 100
        return (price - discountAmount).toFixed(2)
    }


    return (
        <View>
            {discount && (
                <View style={styles.containerData}>
                    <Text style={styles.dataText}>Precio recomendado:</Text>
                    <Text style={[styles.dataValue, styles.oldPrice]}>s/.{price}</Text>
                </View>
            )}
            <View style={styles.containerData}>
                <Text style={styles.dataText}>Precio</Text>
                <Text style={[styles.dataValue, styles.dataCurrentPrice]}>
                    s/.{calcPrice(price, discount)}
                </Text>
            </View>
            {discount && (
                <View style={styles.containerData}>
                    <Text style={styles.dataText}>Ahorras:</Text>
                    <Text style={[styles.dataValue, styles.saving]}>
                        s/.{((price * discount) / 100).toFixed(2)}({discount}%)
                    </Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    dataText: {
        width: "60%",
        fontSize: 18,
        color: "#747474",
        textAlign: 'right'
    },
    dataValue: {
        width: "40%",
        fontSize: 18,
        paddingLeft: 5,

    },
    oldPrice: {
        textDecorationLine: 'line-through'
    },
    dataCurrentPrice: {
        fontSize: 23,
        color: "#bc0e0d"
    },
    saving: {
        color: "#bc0e0d"
    }
})
