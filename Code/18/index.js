

;(function() {



    var getBMI = function (val) {
        if (val < 18.5) {
            return FLAT;
        } else if (18.5 <= val && val < 23.9) {
            return STANDARD;
        } else if (24.0 <= val && val < 27.9) {
            return OVERLOAD;
        } else if (28.0 <= val) {
            return FAT;
        } else {
            return ERROR_VALUE;
        }
    };

    /* Moudle 阶梯访问表 分数区间
    ----------------------------------------------------- */
    var getLevelByScore = function (score) {
        var item = -1, i = -1, level = 'ERROR';
        var scoreTable = {
            'F': 50,
            'D': 65,
            'C': 75,
            'B': 90,
            'A': 100
        };
        var keys = Object.keys(scoreTable);

        for (i = 0; i < keys.length; i++) {
            item = scoreTable[keys[i]];
            if (score < item) {
                level = keys[i];
                break;
            }
        }

        return level;
    };

    var getLevelByScore = function (score) {
        var item = -1, i = -1, level = 'ERROR';
        var scoreTable = {
            'F': 50,
            'D': 65,
            'C': 75,
            'B': 90,
            'A': 100.1
        };
        var keys = Object.keys(scoreTable);
    
        for (i = 0; i < keys.length; i++) {
            item = scoreTable[keys[i]];
            if (score < item) {
                level = keys[i];
                break;
            }
        }
    
        return level;
    };
    
    console.log(getLevelByScore(100));

    // console.log(getLevelByScore(101));



    /* Moudle 保险费率表
    ----------------------------------------------------- */

    // if (gender === '男') {
    //     if (maritalStatus === '单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             }
    //             ageArr[age][0];
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else if (maritalStatus === '不单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else {
    //         console.log('单身异常');
    //     }
    // } else if (gender === '女') {
    //     if (maritalStatus === '单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     } else if (maritalStatus === '不单身') {
    //         if (smokingStatus === '不抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else if (smokingStatus === '抽烟') {
    //             if (age < 18) {
    //                 rate = 200.00;
    //             } else if (age == 18) {
    //                 rate = 250.00;
    //             }
    //         } else {
    //             console.log('抽烟异常');
    //         }
    //     }
    // } else {
    //     console.log('性别异常...');
    // }

    // 第四层面 根据性别、是否单身、是否吸烟、年龄获取保险费率, 越来越复杂
    // if (gender === 'man') {
    //     if (single === 'yes') {
    //         if (smoking === 'yes') {
    //             if (age < 18) {
    //                 rate = 200;
    //             } else if (age === 19) {
    //                 rate = 250;
    //             } else if (age === 20) {
    //                 rate = 300;
    //             } else if (age > 21) {
    //                 rate = 350;
    //             }
    //         }
    //     }
    // }

    // var rateTable = {
    //     man: {
    //         singleYes: {
    //             smokingYes: {
    //                 '17': 200,
    //                 '19': 250,
    //                 '20': 300,
    //                 '22': 350
    //             },
    //             smokingNo: {
    //                 '17': 200,
    //                 '19': 250,
    //                 '20': 300,
    //                 '22': 350
    //             }
    //         }
    //     }
    // };

    // console.log(rateTable['man']['singleYes']['smokingYes']['20']); 


    // 第三层面 根据性别、是否单身、年龄获取保险费率
    // if (gender === 'man') {
    //     if (single === 'yes') {
    //         if (age < 18) {
    //             rate = 200;
    //         } else if (age === 19) {
    //             rate = 250;
    //         } else if (age === 20) {
    //             rate = 300;
    //         } else if (age > 21) {
    //             rate = 350;
    //         }
    //     } else if (single === 'no') {
    //         if (age < 18) {
    //             rate = 250;
    //         } else if (age === 19) {
    //             rate = 300;
    //         } else if (age === 20) {
    //             rate = 350;
    //         } else if (age > 21) {
    //             rate = 400;
    //         }
    //     }
    // } else if (gender === 'woman') {
    //     if (single === 'yes') {
    //         if (age < 18) {
    //             rate = 200;
    //         } else if (age === 19) {
    //             rate = 250;
    //         } else if (age === 20) {
    //             rate = 300;
    //         } else if (age > 21) {
    //             rate = 350;
    //         }
    //     } else if (single === 'no') {
    //         if (age < 18) {
    //             rate = 250;
    //         } else if (age === 19) {
    //             rate = 300;
    //         } else if (age === 20) {
    //             rate = 350;
    //         } else if (age > 21) {
    //             rate = 400;
    //         }
    //     }
    // }

    // var rateTable = {
    //     man: {
    //         singleYes: {
    //             '17': 200,
    //             '19': 250,
    //             '20': 300,
    //             '22': 350
    //         },
    //         singleNo: {
    //             '17': 220,
    //             '19': 230,
    //             '20': 340,
    //             '22': 350
    //         }
    //     },
    //     woman: {
    //         singleYes: {
    //             '17': 200,
    //             '19': 250,
    //             '20': 300,
    //             '22': 350
    //         },
    //         singleNo: {
    //             '17': 220,
    //             '19': 230,
    //             '20': 340,
    //             '22': 350
    //         }
    //     }
    // };

    // console.log(rateTable['woman']['singleYes']['22']); 

    // 第二层面 根据性别、年龄获取保险费率
    // if (gender === '男') {
        // if (age < 18) {
        //     rate = 200;
        // } else if (age === 19) {
        //     rate = 250;
        // } else if (age === 20) {
        //     rate = 300;
        // } else if (age > 21) {
        //     rate = 350;
        // }
    // } else if (gender === '女') {
        // if (age < 18) {
        //     rate = 250;
        // } else if (age === 19) {
        //     rate = 300;
        // } else if (age === 20) {
        //     rate = 350;
        // } else if (age > 21) {
        //     rate = 400;
        // }
    // }

    // var rateTable = {
    //     'man': {
    //         '17': 200,
    //         '19': 250,
    //         '20': 300,
    //         '22': 350
    //     },
    //     'woman': {
    //         '17': 250,
    //         '19': 300,
    //         '20': 350,
    //         '22': 400
    //     }
    // };

    // console.log(rateTable['woman']['22']); 


    // 第一层面
    // if (age < 18) {
    //     rate = 200;
    // } else if (age === 19) {
    //     rate = 250;
    // } else if (age === 20) {
    //     rate = 300;
    // } else if (age > 21) {
    //     rate = 350;
    // }

    // // 表怎么定义, 那么 (age < 18岁) 和 (age > 21岁) 的怎么定义?
    // var getRateTable = function (age) {
    //     var rateTable = {
    //         '17': 200,
    //         '19': 250,
    //         '20': 300,
    //         '22': 350
    //     };

    //     return function() {
    //         if (age < 18) {
    //             return rateTable['17'];
    //         }
    //         if (age > 21) {
    //             return rateTable['22'];
    //         }
    //         return rateTable[age];
    //     }();
    // };
    

    // // 表怎么访问
    // console.log(getRateTable(100));
    // console.log(rateTable[19]); 

    /* Moudle 年月日表
    ----------------------------------------------------- */

    // var leapYearIndex = function (year) {
    //     year = year || new Date().getFullYear();
    //     var cond1 = year % 4 === 0;
    //     var cond2 = year % 100 !== 0;
    //     var cond3 = year % 400 === 0;
    //     var cond = cond1 && cond2 || cond3;
    //     return cond ? 1 : 0;
    // };

    // var getDaysForMonth = function (month, leapYearIndex) {
    //     var getDaysForMonthTable = [31, (leapYearIndex === 1 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //     // 此处利用闭包, 不会每次求值 table 里面的值
    //     return function () {
    //         return getDaysForMonthTable[month - 1];
    //     }();
    // };

    // console.log(getDaysForMonth(2, leapYearIndex()));



    /* Moudle 判断字符表
    ----------------------------------------------------- */

    // var getCharType = function (char) {
    //     if ((('a' <= char) && (char <= 'z')) || (('A' <= char) && (char <= 'Z'))) {
    //         console.log('字母类型');
    //     } else if ((char === ',') || (char === '.') || (char === '?') || (char === '/')) {
    //         console.log('字符类型');
    //     } else if (0 <= char && char <= 9) {
    //         console.log('数字类型');
    //     } else {
    //         console.log('其他类型');
    //     }
    // };

    // var charType = {
    //     letter: '字母类型',
    //     punctuation: '字符类型',
    //     digit: '数字类型'
    // };

    // var charTypeTable = {
    //     'a': charType.letter,
    //     'b': charType.letter,
    //     'c': charType.letter,
    //     ',': charType.punctuation,
    //     '!': charType.punctuation,
    //     '?': charType.punctuation,
    //     '/': charType.punctuation,
    //     '0': charType.digit,
    //     '1': charType.digit,
    //     '2': charType.digit,
    //     '3': charType.digit
    // };

    // console.log(charTypeTable['0']); 
})();