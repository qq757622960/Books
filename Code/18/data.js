/** 
 * @Author: YISHI 
 * @Date: 2019-03-13 09:47:47 
 * @Desc: 表数据 
 */

var healthyTable = {
    // BMI
    bmi: {
        grade: ['偏低', '标准', '超重', '肥胖'],
        rangeLimit: [18.5, 23.9, 27.9, 100]
    },
    // 内脏脂肪数
    nof: {
        grade: ['标准', '偏高', '高'],
        rangeLimit: [9, 14, 100]      
    },
    // [0, 1] => ['女', '男']
    // 肌肉率 gender, value 
    rom: [
            {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [30, 50, 100]
            },
            {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [40, 60, 100]
            }
        ],
    // 水份
    tm: [
            {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [45, 60, 100]
            },
            {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [55, 65, 100]
            }
        ],
    // 蛋白质
    protein: [
        {
            grade: ['偏低', '标准', '偏高'],
            rangeLimit: [14, 16.001, 100]
        },
        {
            grade: ['偏低', '标准', '偏高'],
            rangeLimit: [16, 18.001, 100]
        }
    ],
    // 计算体脂率
    bfr: [
        {
            '30': {
                grade: ['偏低', '标准', '偏高', '高'],
                rangeLimit: [16, 24, 30, 100]
            },
            '100': {
                grade: ['偏低', '标准', '偏高', '高'],
                rangeLimit: [19, 27, 30, 100]
            }
        }, 
        {
            '30': {
                grade: ['偏低', '标准', '偏高', '高'],
                rangeLimit: [10, 21, 26, 100]
            },
            '100': {
                grade: ['偏低', '标准', '偏高', '高'],
                rangeLimit: [11, 22, 27, 100]
            }
        }
    ],
    //计算骨重
    bih: [
        {
            '45': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [1.7, 1.9001, 100]
            },
            '60': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [2.1, 2.30001, 100]
            },
            '100': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [2.4, 2.60001, 100]
            }
        },
        {
            '60': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [2.4, 2.6001, 100]
            },
            '75': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [2.8, 3.0001, 100]
            },
            '100': {
                grade: ['偏低', '标准', '偏高'],
                rangeLimit: [3.1, 3.30001, 100]
            }
        }
    ],
    // 基础代谢率
    bmr: function(weight) {
        var table = [{}, {}];
        var gender = [0, 1];
        var ageLimit = [2, 9, 17, 29, 100];
        var rangeList = [[60.1*weight-51, 22.5*weight+499, 12.2*weight+746, 14.7*weight+496, 8.7*weight+820], 
                        [60.9*weight-54, 22.7*weight+495, 17.5*weight+651, 15.3*weight+679, 11.6*weight+879]];
        
        for (var i = 0; i < gender.length; i++) {
            for (var j = 0; j < ageLimit.length; j++) {
                table[i][ageLimit[j]] = rangeList[i][j]
            }
        }

        return table;
    }
};