import { StyleSheet } from "react-native";

export default StyleSheet.create({
 container: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    height: 100,
  },
  menuButton: {
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 50,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  profileButton: {
    marginRight: 10,
  },
  profileButtonText: {
     color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  menu: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
   backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'none',
  },
  menuOpen: {
    display: 'flex',
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
})