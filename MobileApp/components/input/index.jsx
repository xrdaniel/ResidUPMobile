import React from 'react'
import  Styles from './styles.jsx'
import { Controller } from 'react-hook-form'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native'

export function Input({ name, errors, inputRef, control, onSubmitEditing, placeholder, secureTextEntry, keyboardType }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        ref={inputRef}
                        onSubmitEditing={onSubmitEditing}
                        placeholder={placeholder}
                        style={Styles.textInput}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                    />
                )}
                {...errors[name] && <Text style={Styles.textError}>{errors[name].message}</Text>}
            />
        </>
    )
}