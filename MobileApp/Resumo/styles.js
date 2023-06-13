import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
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
    height: 'auto',
    width: 'auto',

},

bodyLadoaLado: {
    
    flexDirection: 'row',
    justifyContent: 'space-between'
},

textHeader: {
  backgroundColor: "#E6E6E6",
  width: '100%',
  fontWeight: 'bold',
  fontSize: 12,
  padding: 5
},
textHeaderDown: {
  backgroundColor: "#E6E6E6",
  width: '100%',
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

inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    textAlign: 'center',
    height: 'auto',
  },

})