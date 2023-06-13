import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
container: {
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
},
body: {
    padding: 20,
    backgroundColor: '#545555',
    height: 300,
    width: '90%',

},

bodyLadoaLado: {
    
    flexDirection: 'row',
    justifyContent: 'space-between'
},

textHeader: {
  backgroundColor: "#E6E6E6",
  width: '90%',
  fontWeight: 'bold',
  fontSize: 12,
  padding: 5
},
textHeaderDown: {
  backgroundColor: "#E6E6E6",
  width: '90%',
  fontWeight: 'bold',
  fontSize: 12,
  padding: 5,
  marginTop: 50
},

textDescricao: {
  color: "#fff",
  width: '90%',
  fontWeight: 'bold',
  fontSize: 12,
  padding: 5
},

textInput: {

  backgroundColor: 'blue'
},

inputTitulo: {

   height: 30, 
   width: 120,
   borderColor: '#E6E6E6', 
   backgroundColor: '#E6E6E6',
   borderWidth: 1,
   borderRadius: 20
},
inputDescricao: {

   height: 200, 
   width: 245,
   borderColor: '#E6E6E6', 
   backgroundColor: '#E6E6E6',
   marginTop: 50,
   borderWidth: 1,
   borderRadius: 20
},
buttonSalvar: {
  width: '20%',
  borderRadius: 20,
  backgroundColor: '#01BE63'
}
})