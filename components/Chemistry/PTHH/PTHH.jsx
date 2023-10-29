import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, List, ListItem, SafeAreaView } from 'react-native';

import styles from './PTHH.style'

const PTHH = () => {
    const [equation, setEquation] = useState('');
    const [reactions, setReactions] = useState([]);

    useEffect(() => {
        // Get list of reactions from database
        fetch('./pthh.json')
            .then(response => response.json())
            .then(reactions => {
                setReactions(reactions);
            });
    }, []);

    const onButtonClick = () => {
        // Identify reactants and products
        const reactants = equation.split('->')[0].split(' + ');
        const products = equation.split('->')[1].split(' + ');

        // Find matching reactions
        const matchingReactions = reactions.filter(reaction => {
            const generatedReactants = reaction.reaction.split('->')[0].split(' + ');
            const generatedProducts = reaction.reaction.split('->')[1].split(' + ');

            return reactants.every(reactant => generatedProducts.includes(reactant)) &&
                products.every(product => generatedReactants.includes(product));
        });

        // Display results
        if (matchingReactions.length === 0) {
            alert('No matching reactions found');
        } else if (matchingReactions.length > 1) {
            alert('Multiple matching reactions found');
        } else {
            alert(matchingReactions[0].reaction);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    placeholder='Enter chemical reaction equation'
                    value={equation}
                    onChangeText={text => setEquation(text)}
                />
                <Text>{equation}</Text>
                <Button title='Complete' onPress={onButtonClick} />
            </View>
        </SafeAreaView>
    )
}

export default PTHH