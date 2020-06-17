import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions, PanResponder } from "react-native";

class SectionIndexer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollview_ref: null,
            layoutWidth: Dimensions.get('window').width,
            layoutHeight: Dimensions.get('window').height,

            arrScrollDataLoc: [0, null, null, null, null, null, null, null, null, null, null, null, null, null, null],       // 회원 리스트의 첫번째 초성 아이템 좌표
            arrScrollDataNm: [],        // 회원 리스트의 첫번째 초성 아이템 이름
            sideIndexLoc: [],           // 사이드바의 ㄱ,ㄴ,ㄷ ... 좌표
            absolutePosition: 0         // 사이드바의 절대 위치
        };

        this._panResponder2 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => { },
            onPanResponderMove: (evt, gestureState) => {
                let { sideIndexLoc, absolutePosition } = this.state;
                const touchLoc = Number(evt.nativeEvent.pageY);

                if (touchLoc < (Number(sideIndexLoc[0]) + Number(absolutePosition))) {
                    this._scrollTo(0);
                } else if (touchLoc < (Number(sideIndexLoc[1]) + Number(absolutePosition))) {
                    this._scrollTo(1);
                } else if (touchLoc < (Number(sideIndexLoc[2]) + Number(absolutePosition))) {
                    this._scrollTo(2);
                } else if (touchLoc < (Number(sideIndexLoc[3]) + Number(absolutePosition))) {
                    this._scrollTo(3);
                } else if (touchLoc < (Number(sideIndexLoc[4]) + Number(absolutePosition))) {
                    this._scrollTo(4);
                } else if (touchLoc < (Number(sideIndexLoc[5]) + Number(absolutePosition))) {
                    this._scrollTo(5);
                } else if (touchLoc < (Number(sideIndexLoc[6]) + Number(absolutePosition))) {
                    this._scrollTo(6);
                } else if (touchLoc < (Number(sideIndexLoc[7]) + Number(absolutePosition))) {
                    this._scrollTo(7);
                } else if (touchLoc < (Number(sideIndexLoc[8]) + Number(absolutePosition))) {
                    this._scrollTo(8);
                } else if (touchLoc < (Number(sideIndexLoc[9]) + Number(absolutePosition))) {
                    this._scrollTo(9);
                } else if (touchLoc < (Number(sideIndexLoc[10]) + Number(absolutePosition))) {
                    this._scrollTo(10);
                } else if (touchLoc < (Number(sideIndexLoc[11]) + Number(absolutePosition))) {
                    this._scrollTo(11);
                } else if (touchLoc < (Number(sideIndexLoc[12]) + Number(absolutePosition))) {
                    this._scrollTo(12);
                } else if (touchLoc < (Number(sideIndexLoc[13]) + Number(absolutePosition))) {
                    this._scrollTo(13);
                } else if (touchLoc < (Number(sideIndexLoc[14]) + Number(absolutePosition))) {
                    this._scrollTo(14);
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => { },
            onPanResponderTerminate: (evt, gestureState) => { },
            onShouldBlockNativeResponder: (evt, gestureState) => { return true; },
        });
    }


    _scrollTo = (idx) => {
        if (this.state.arrScrollDataLoc[idx] !== null) {
            this.state.scrollview_ref.scrollTo({
                x: 0,
                y: this.state.arrScrollDataLoc[idx],
                animated: false,
            });
        }
    }


    _getKorFirstSpelling = (str) => {
        if (str.length > 0) {
            str = str.substr(0, 1)
        }
        let cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
        let result = "";

        for (let j = 0; j < str.length; j++) {
            let code = str.charCodeAt(j) - 44032;
            if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
        }
        return result;
    }


    render() {
        const { arrNames, renderItem, textSize = 12, textColor = '#8a8a8a', divSize = 5, divColor = '#b3b3b3', indexerWidth = 20, indexerColor = '#f2f2f2', indexerBorderR = 10,indexerRightMargin=5 } = this.props;
        const { layoutWidth, layoutHeight } = this.state;

        return (
            <View style={{ flex: 1, width: layoutWidth }}>

                <ScrollView
                    ref={ref => { this.state.scrollview_ref = ref; }}
                    style={{ flex: 1, width: layoutWidth }}
                    contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
                    keyboardShouldPersistTaps='handled'>
                    <View style={{ flex: 1 }}>
                        {
                            arrNames.map((item, idx) => (
                                <View
                                    key={idx}
                                    onLayout={event => {
                                        const layout = event.nativeEvent.layout;
                                        const firstSpel = this._getKorFirstSpelling(item.name)

                                        if (!this.state.arrScrollDataNm.includes(firstSpel)) {
                                            this.state.arrScrollDataNm.push(firstSpel);

                                            if ("ㄱ" === firstSpel) {
                                                this.state.arrScrollDataLoc[1] = layout.y;
                                            } else if ("ㄴ" === firstSpel) {
                                                this.state.arrScrollDataLoc[2] = layout.y;
                                            } else if ("ㄷ" === firstSpel) {
                                                this.state.arrScrollDataLoc[3] = layout.y;
                                            } else if ("ㄹ" === firstSpel) {
                                                this.state.arrScrollDataLoc[4] = layout.y;
                                            } else if ("ㅁ" === firstSpel) {
                                                this.state.arrScrollDataLoc[5] = layout.y;
                                            } else if ("ㅂ" === firstSpel) {
                                                this.state.arrScrollDataLoc[6] = layout.y;
                                            } else if ("ㅅ" === firstSpel) {
                                                this.state.arrScrollDataLoc[7] = layout.y;
                                            } else if ("ㅇ" === firstSpel) {
                                                this.state.arrScrollDataLoc[8] = layout.y;
                                            } else if ("ㅈ" === firstSpel) {
                                                this.state.arrScrollDataLoc[9] = layout.y;
                                            } else if ("ㅊ" === firstSpel) {
                                                this.state.arrScrollDataLoc[10] = layout.y;
                                            } else if ("ㅋ" === firstSpel) {
                                                this.state.arrScrollDataLoc[11] = layout.y;
                                            } else if ("ㅌ" === firstSpel) {
                                                this.state.arrScrollDataLoc[12] = layout.y;
                                            } else if ("ㅍ" === firstSpel) {
                                                this.state.arrScrollDataLoc[13] = layout.y;
                                            } else if ("ㅎ" === firstSpel) {
                                                this.state.arrScrollDataLoc[14] = layout.y;
                                            }
                                        }
                                    }}>
                                    {renderItem({ item, idx })}
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>

                <View
                    {...this._panResponder2.panHandlers}
                    onLayout={event => {
                        const absolutePosition = layoutHeight - event.nativeEvent.layout.height;
                        this.state.absolutePosition = absolutePosition;
                    }}
                    style={{ position: 'absolute', width: indexerWidth, height: '100%', backgroundColor: indexerColor, right: indexerRightMargin, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', borderRadius: indexerBorderR }}>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[0] = event.nativeEvent.layout.y }}>★</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[1] = event.nativeEvent.layout.y }}>ㄱ</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[2] = event.nativeEvent.layout.y }}>ㄴ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[3] = event.nativeEvent.layout.y }}>ㄷ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[4] = event.nativeEvent.layout.y }}>ㄹ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[5] = event.nativeEvent.layout.y }}>ㅁ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[6] = event.nativeEvent.layout.y }}>ㅂ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[7] = event.nativeEvent.layout.y }}>ㅅ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[8] = event.nativeEvent.layout.y }}>ㅇ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[9] = event.nativeEvent.layout.y }}>ㅈ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[10] = event.nativeEvent.layout.y }}>ㅊ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[11] = event.nativeEvent.layout.y }}>ㅋ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[12] = event.nativeEvent.layout.y }}>ㅌ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[13] = event.nativeEvent.layout.y }}>ㅍ</Text>
                    <Text style={{ fontSize: divSize, color: divColor }}>●</Text>
                    <Text style={{ fontSize: textSize, color: textColor }}
                        onLayout={event => { this.state.sideIndexLoc[14] = event.nativeEvent.layout.y }}>ㅎ</Text>
                </View>
            </View>
        )
    }
}

export default SectionIndexer;