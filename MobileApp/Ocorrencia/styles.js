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
    height: 350,
    width: '90%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
},

bodyLadoaLado: {
    
    flexDirection: 'row',
    justifyContent: 'space-between'
},

textHeader: {
  height: 30,
  backgroundColor: "#E6E6E6",
  width: '90%',
  fontWeight: 'bold',
  fontSize: 12,
  padding: 5,
},
textHeaderDown: {
  backgroundColor: "#E6E6E6",
  width: '90%',
  height: 30,
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

   height: 33, 
   width: 160,
   borderColor: '#E6E6E6', 
   backgroundColor: '#E6E6E6',
   borderWidth: 1,
   borderRadius: 20
},
inputDescricao: {

   height: 200, 
   width: 335,
   borderColor: '#E6E6E6', 
   backgroundColor: '#E6E6E6',
   marginTop: 50,
   borderWidth: 1,
   borderRadius: 20
},
buttonSalvar: {
  width: '20%',
  borderRadius: 20,
  backgroundColor: 'black'
}
})