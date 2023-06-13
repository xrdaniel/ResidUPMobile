import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
container: {
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
body: {
    
    padding: 20,
    backgroundColor: '#545555',
    height: 10,
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
label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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

  card: {
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#545555',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
datePicker: {
    marginBottom: 16,
  },

selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  selectDropdown: {
    flex: 1,
    paddingVertical: 8,
  },


});