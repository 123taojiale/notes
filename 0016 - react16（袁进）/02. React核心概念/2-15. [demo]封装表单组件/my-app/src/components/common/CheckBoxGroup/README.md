| 属性          | 数据类型   | 描述                                                           |
| ------------- | ---------- | -------------------------------------------------------------- |
| datas         | 对象数组   | 对象结构 `{ value: "复选框的值", text: "复选框展示的文本" }` |
| selectedDatas | 字符串数组 | 存放选中的值 `[ "选中的复选框的值" ]`                        |
| name          | 字符串     | 复选框的 name 属性                                             |

| 事件     | 参数                                                                   | 描述                            |
| -------- | ---------------------------------------------------------------------- | ------------------------------- |
| onChange | 参数1：selectedDatas；参数2：复选框的 name 属性；参数3：事件对象 Event | 当 selectedDatas 发生变化时触发 |