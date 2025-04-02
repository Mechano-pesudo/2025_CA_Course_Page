import csv

# 初始化数据结构
studentData = {}
students = {}

# 读取 CSV 文件
with open('students.csv', 'r', encoding='utf-8') as file:
    lines = list(csv.reader(file))
    
    # 跳过前 5 行表头
    headers = lines[5]  # 第 6 行：序号,学号,姓名,平时成绩,,,,,课堂考勤,,,考查成绩,考试成绩,学期总成绩,备注
    dates = lines[6]    # 第 7 行：,,,2月27 日,3月6日,,,,3月4日,,,,,,
    data_rows = lines[7:]  # 第 8 行起：学生数据
    
    # 解析平时成绩和考勤的列索引
    regular_start = headers.index('平时成绩')  # 平时成绩后的第一列
    attendance_start = headers.index('课堂考勤')  # 考勤后的第一列
    exam_start = headers.index('考查成绩')  # 考查成绩列
    
    # 提取平时成绩和考勤的日期列数
    regular_dates = [date for date in dates[regular_start:attendance_start-1] if date]
    attendance_dates = [date for date in dates[attendance_start:exam_start-1] if date]
    
    # 处理学生数据
    for row in data_rows:
        if not row or not row[1]:  # 跳过空行或无学号的行
            continue
        studentId = row[1]  # 学号
        name = row[2]       # 姓名
        
        # 初始化学生数据
        if studentId not in studentData:
            studentData[studentId] = {
                'name': name,
                'grades': {
                    'regular': [],
                    'attendance': [],
                    'midterm': {'total': 0, 'questions': [0, 0, 0, 0, 0]},
                    'final': {'total': 0, 'questions': [0, 0, 0, 0, 0]}
                }
            }
            students[studentId] = studentId  # 初始密码为学号
        
        # 添加平时成绩
        for i, date in enumerate(regular_dates):
            score = row[regular_start + i]
            if score:  # 如果有得分
                studentData[studentId]['grades']['regular'].append({
                    'date': date,
                    'score': int(float(score))  # 转换为整数，支持小数
                })
            elif date:  # 日期存在但无得分
                studentData[studentId]['grades']['regular'].append({
                    'date': date,
                    'score': 0
                })
        
        # 添加考勤
        for i, date in enumerate(attendance_dates):
            score = row[attendance_start + i]
            if score:
                studentData[studentId]['grades']['attendance'].append({
                    'date': date,
                    'score': int(float(score))
                })
            elif date:
                studentData[studentId]['grades']['attendance'].append({
                    'date': date,
                    'score': 0
                })

# 生成 JavaScript 代码
js_code = ""

# 文件头部注释
js_code += "// auth.js\n\n"

# 用户和密码
js_code += "// 用户和密码\n"
js_code += "const students = {\n"
for studentId, password in students.items():
    js_code += f'    "{studentId}": "{password}",\n'
js_code += "};\n\n"

# 学生信息和成绩数据
js_code += "// 学生信息和成绩数据\n"
js_code += "const studentData = {\n"
for studentId, data in studentData.items():
    js_code += f'    "{studentId}": {{\n'
    js_code += f'        name: "{data["name"]}",\n'
    js_code += f'        grades: {{\n'
    
    js_code += f'            regular: [\n'
    for g in data['grades']['regular']:
        js_code += f'                {{ date: "{g["date"]}", score: {g["score"]} }},\n'
    js_code += f'            ],\n'
    
    js_code += f'            attendance: [\n'
    for g in data['grades']['attendance']:
        js_code += f'                {{ date: "{g["date"]}", score: {g["score"]} }},\n'
    js_code += f'            ],\n'
    
    js_code += f'        }}\n'
    js_code += f'    }},\n'
js_code += "};\n\n"

# 登录和页面加载逻辑
js_code += "// 登录表单\n"
js_code += "const loginForm = document.getElementById('login-form');\n"
js_code += "if (loginForm) {\n"
js_code += "    loginForm.addEventListener('submit', (e) => {\n"
js_code += "        e.preventDefault();\n"
js_code += "        const studentId = document.getElementById('username').value;\n"
js_code += "        const password = document.getElementById('password').value;\n"
js_code += "        const message = document.getElementById('login-message');\n"
js_code += "\n"
js_code += "        if (students[studentId] === password && studentData[studentId]) {\n"
js_code += "            localStorage.setItem('loggedInStudent', studentId);\n"
js_code += "            window.location.href = 'grades.html';\n"
js_code += "        } else {\n"
js_code += "            message.textContent = '学号或密码错误！';\n"
js_code += "            message.style.color = '#ff6b6b';\n"
js_code += "        }\n"
js_code += "    });\n"
js_code += "}\n\n"

js_code += "// 成绩页面加载\n"
js_code += "const studentIdSpan = document.getElementById('student-id');\n"
js_code += "if (studentIdSpan) {\n"
js_code += "    const loggedInStudent = localStorage.getItem('loggedInStudent');\n"
js_code += "    if (!loggedInStudent || !studentData[loggedInStudent]) {\n"
js_code += "        window.location.href = 'login.html';\n"
js_code += "    } else {\n"
js_code += "        const student = studentData[loggedInStudent];\n"
js_code += "        document.getElementById('student-id').textContent = loggedInStudent;\n"
js_code += "        document.getElementById('student-name').textContent = student.name;\n"
js_code += "        document.getElementById('student-group').textContent = student.group;\n"
js_code += "\n"
js_code += "        // 平时成绩\n"
js_code += "        const regularTbody = document.getElementById('regular-tbody');\n"
js_code += "        regularTbody.innerHTML = '';\n"
js_code += "        student.grades.regular.forEach(g => {\n"
js_code += "            const tr = document.createElement('tr');\n"
js_code += "            tr.innerHTML = `<td>${g.date}</td><td>${g.score}</td>`;\n"
js_code += "            regularTbody.appendChild(tr);\n"
js_code += "        });\n"
js_code += "\n"
js_code += "        // 考勤\n"
js_code += "        const attendanceTbody = document.getElementById('attendance-tbody');\n"
js_code += "        attendanceTbody.innerHTML = '';\n"
js_code += "        student.grades.attendance.forEach(g => {\n"
js_code += "            const tr = document.createElement('tr');\n"
js_code += "            tr.innerHTML = `<td>${g.date}</td><td>${g.score}</td>`;\n"
js_code += "            attendanceTbody.appendChild(tr);\n"
js_code += "        });\n"
js_code += "\n"
js_code += "    }\n"
js_code += "}\n\n"

js_code += "// 退出登录\n"
js_code += "const logoutLink = document.getElementById('logout');\n"
js_code += "if (logoutLink) {\n"
js_code += "    logoutLink.addEventListener('click', () => {\n"
js_code += "        localStorage.removeItem('loggedInStudent');\n"
js_code += "    });\n"
js_code += "}\n"

# 写入 auth.js
with open('new_auth.js', 'w', encoding='utf-8') as js_file:
    js_file.write(js_code)

print("已生成 new_auth.js 文件！")