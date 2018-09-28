/**
 * Copyright (c) 2018-present, HungKuei
 * All rights reserved.
 *
 * https://github.com/HungKuei/DBlog  
 * @flow
 */

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}