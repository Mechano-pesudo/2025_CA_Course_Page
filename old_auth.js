// auth.js

// 用户和密码
const students = {
    "PB19000080": "PB19000080",
    "PB19071413": "PB19071413",
    "PB19071421": "PB19071421",
    "PB20050983": "PB20050983",
    "PB20061365": "PB20061365",
    "PB21151790": "PB21151790",
    "PB22010291": "PB22010291",
    "PB22010294": "PB22010294",
    "PB22010326": "PB22010326",
    "PB22010371": "PB22010371",
    "PB22010372": "PB22010372",
    "PB22010373": "PB22010373",
    "PB22010424": "PB22010424",
    "PB22020544": "PB22020544",
    "PB22030764": "PB22030764",
    "PB22081546": "PB22081546",
    "PB22151753": "PB22151753",
    "PB22151763": "PB22151763",
    "PB22151769": "PB22151769",
    "PB23000009": "PB23000009",
    "PB23000014": "PB23000014",
    "PB23000019": "PB23000019",
    "PB23000020": "PB23000020",
    "PB23000062": "PB23000062",
    "PB23000076": "PB23000076",
    "PB23000078": "PB23000078",
    "PB23000085": "PB23000085",
    "PB23000097": "PB23000097",
    "PB23000166": "PB23000166",
    "PB23000185": "PB23000185",
    "PB23000187": "PB23000187",
    "PB23000204": "PB23000204",
    "PB23000216": "PB23000216",
    "PB23000230": "PB23000230",
    "PB23000279": "PB23000279",
    "PB23000294": "PB23000294",
    "PB23000299": "PB23000299",
    "PB23010363": "PB23010363",
    "PB23010364": "PB23010364",
    "PB23010365": "PB23010365",
    "PB23010366": "PB23010366",
    "PB23010374": "PB23010374",
    "PB23010380": "PB23010380",
    "PB23010382": "PB23010382",
    "PB23010385": "PB23010385",
    "PB23010390": "PB23010390",
    "PB23010392": "PB23010392",
    "PB23010393": "PB23010393",
    "PB23010396": "PB23010396",
    "PB23010397": "PB23010397",
    "PB23010400": "PB23010400",
    "PB23010404": "PB23010404",
    "PB23010405": "PB23010405",
    "PB23010406": "PB23010406",
    "PB23010413": "PB23010413",
    "PB23010414": "PB23010414",
    "PB23010415": "PB23010415",
    "PB23010416": "PB23010416",
    "PB23020485": "PB23020485",
    "PB23020634": "PB23020634",
    "PB23030684": "PB23030684",
    "PB23030788": "PB23030788",
    "PB23030810": "PB23030810",
    "PB23050899": "PB23050899",
    "PB23050933": "PB23050933",
    "PB23050957": "PB23050957",
    "PB23051040": "PB23051040",
    "PB23061307": "PB23061307",
    "PB23071369": "PB23071369",
    "PB23081454": "PB23081454",
    "PB23081462": "PB23081462",
    "PB23111674": "PB23111674",
    "PB23151734": "PB23151734",
    "PB23151735": "PB23151735",
    "PB23151736": "PB23151736",
    "PB23151741": "PB23151741",
    "PB23151745": "PB23151745",
    "PB23151752": "PB23151752",
    "PB23151754": "PB23151754",
    "PB23151757": "PB23151757",
    "PB23151765": "PB23151765",
    "PB23151766": "PB23151766",
    "PB23151767": "PB23151767",
    "PB23151776": "PB23151776",
    "PB23151785": "PB23151785",
    "PB23151790": "PB23151790",
    "PB23151792": "PB23151792",
    "PB23151794": "PB23151794",
    "PB23151797": "PB23151797",
    "PB23151800": "PB23151800",
    "PB23151801": "PB23151801",
    "PB23151805": "PB23151805",
    "PB23151806": "PB23151806",
    "PB23151810": "PB23151810",
    "PB23151811": "PB23151811",
    "PB23151818": "PB23151818",
    "PB23151822": "PB23151822",
    "PB23151823": "PB23151823",
    "PB23151825": "PB23151825",
    "PB23151827": "PB23151827",
    "PB23151828": "PB23151828",
    "PB23151831": "PB23151831",
    "PB23511888": "PB23511888",
    "PB23611962": "PB23611962",
};

// 学生信息和成绩数据
const studentData = {
    "PB19000080": {
        name: "王家华",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB19071413": {
        name: "袁忠豪",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB19071421": {
        name: "王俊辉",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB20050983": {
        name: "姜涛",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB20061365": {
        name: "王子润*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB21151790": {
        name: "刘思雨*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010291": {
        name: "李梦喆",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010294": {
        name: "卢皓东",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010326": {
        name: "蒋广春*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010371": {
        name: "杨思汗",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010372": {
        name: "卢俊可",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010373": {
        name: "刘正阳",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22010424": {
        name: "孙驰",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22020544": {
        name: "朱彤博*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22030764": {
        name: "张墨雨",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22081546": {
        name: "李彦军",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22151753": {
        name: "刘斐璠",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22151763": {
        name: "张润曦",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB22151769": {
        name: "董佳承",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000009": {
        name: "梁晓旸",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000014": {
        name: "彭子晋",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000019": {
        name: "吴文涛",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000020": {
        name: "奚项正",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000062": {
        name: "林轩名",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000076": {
        name: "杜宸屹",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000078": {
        name: "顾泓宇",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000085": {
        name: "霍昭名",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000097": {
        name: "沈子睿",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000166": {
        name: "陈奕伽",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000185": {
        name: "邱鑫泽",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000187": {
        name: "商扬笛",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000204": {
        name: "杨展颜*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000216": {
        name: "冯斐扬",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000230": {
        name: "林瑞浩",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000279": {
        name: "芦承熙",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000294": {
        name: "姚至成",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23000299": {
        name: "张幸锐",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 9 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010363": {
        name: "柯力成",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010364": {
        name: "田天威",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010365": {
        name: "唐洋阳",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010366": {
        name: "张浩东",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010374": {
        name: "李亭皑*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010380": {
        name: "李书浩",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010382": {
        name: "李翊",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010385": {
        name: "张晋峰",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010390": {
        name: "邓家怡*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 9 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010392": {
        name: "王庄德诺",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010393": {
        name: "张汇泽",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010396": {
        name: "李俊辉",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010397": {
        name: "郑翼",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010400": {
        name: "杨曦然",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010404": {
        name: "张源意",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 9 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010405": {
        name: "谢雨凡",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010406": {
        name: "程奕斌",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010413": {
        name: "张涵",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010414": {
        name: "倪嘉晖",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010415": {
        name: "王伟智",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23010416": {
        name: "李政",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23020485": {
        name: "梁羽喆",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23020634": {
        name: "沈一彬",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23030684": {
        name: "苗田田",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 9 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23030788": {
        name: "朱家锐",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23030810": {
        name: "刘振庆",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23050899": {
        name: "赵宇轩",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23050933": {
        name: "李圣雪*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23050957": {
        name: "孔杰",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 9 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23051040": {
        name: "安昭瑞",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23061307": {
        name: "窦富缤",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23071369": {
        name: "倪兆煊",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23081454": {
        name: "熊锦梁",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23081462": {
        name: "于云志",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23111674": {
        name: "李明远",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151734": {
        name: "章玮宸",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151735": {
        name: "朱心妍*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151736": {
        name: "孔亮",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151741": {
        name: "刘忆南",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151745": {
        name: "张筱然",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151752": {
        name: "周哲",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151754": {
        name: "任鹏博",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151757": {
        name: "朴正民",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151765": {
        name: "唐浩",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151766": {
        name: "谭宸*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151767": {
        name: "叶之萌",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151776": {
        name: "罗奥博",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151785": {
        name: "冯晨曦",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151790": {
        name: "陈尔佳*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 9 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151792": {
        name: "李璟逸",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151794": {
        name: "高鹏博",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151797": {
        name: "张佳丽*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151800": {
        name: "邓靖林",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151801": {
        name: "韩梓峒",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151805": {
        name: "吕冰*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151806": {
        name: "何佳俐*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151810": {
        name: "闻博",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 9 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151811": {
        name: "陈品卓",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151818": {
        name: "孙汉皋",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151822": {
        name: "杜家瑄*",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151823": {
        name: "张睿涵",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151825": {
        name: "陈政彤",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151827": {
        name: "时高远",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151828": {
        name: "孔逸宸",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23151831": {
        name: "徐昌鑫",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23511888": {
        name: "刘启明",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 0 },
                { date: "3月6日", score: 0 },
                { date: "3月13日", score: 0 },
            ],
            attendance: [
                { date: "3月4日", score: 0 },
                { date: "3月20日", score: 0 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
    "PB23611962": {
        name: "丁禹夏",
        group: "未分组",
        grades: {
            regular: [
                { date: "2月27 日", score: 10 },
                { date: "3月6日", score: 10 },
                { date: "3月13日", score: 10 },
            ],
            attendance: [
                { date: "3月4日", score: 10 },
                { date: "3月20日", score: 10 },
            ],
            midterm: { total: 0, questions: [0, 0, 0, 0, 0] },
            final: { total: 0, questions: [0, 0, 0, 0, 0] }
        }
    },
};

// 登录表单
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('login-message');

        if (students[studentId] === password && studentData[studentId]) {
            localStorage.setItem('loggedInStudent', studentId);
            window.location.href = 'grades.html';
        } else {
            message.textContent = '学号或密码错误！';
            message.style.color = '#ff6b6b';
        }
    });
}

// 成绩页面加载
const studentIdSpan = document.getElementById('student-id');
if (studentIdSpan) {
    const loggedInStudent = localStorage.getItem('loggedInStudent');
    if (!loggedInStudent || !studentData[loggedInStudent]) {
        window.location.href = 'login.html';
    } else {
        const student = studentData[loggedInStudent];
        document.getElementById('student-id').textContent = loggedInStudent;
        document.getElementById('student-name').textContent = student.name;
        document.getElementById('student-group').textContent = student.group;

        // 平时成绩
        const regularTbody = document.getElementById('regular-tbody');
        regularTbody.innerHTML = '';
        student.grades.regular.forEach(g => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${g.date}</td><td>${g.score}</td>`;
            regularTbody.appendChild(tr);
        });

        // 考勤
        const attendanceTbody = document.getElementById('attendance-tbody');
        attendanceTbody.innerHTML = '';
        student.grades.attendance.forEach(g => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${g.date}</td><td>${g.score}</td>`;
            attendanceTbody.appendChild(tr);
        });

    }
}

// 退出登录
const logoutLink = document.getElementById('logout');
if (logoutLink) {
    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInStudent');
    });
}
