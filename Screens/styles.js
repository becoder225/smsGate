import {Dimensions} from 'react-native';

export const StyleApp = new class StyleProvider {
  getStyle() {
    return {
      buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#529228',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      },
      slideImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,

        resizeMode: 'contain',
      },
      slideTitle: {
        marginTop: -50,
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        color: '#529228',
      },
      slideText: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'justify',
        marginHorizontal: 30,
        fontFamily: 'Verdana',
        opacity: 0.5,
      },
      activeDotStyle: {
        backgroundColor: '#529228',
        width: 30,
      },
    };
  }
}