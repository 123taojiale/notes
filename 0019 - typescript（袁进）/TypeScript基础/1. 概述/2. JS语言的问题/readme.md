# 2. JS语言的问题

26:24


## 00:00:20

查看上述 JS 代码，看看都存在哪些问题

## 00:03:30

错误1：变量名写错
比如：
第8行：getUserName
第9行：myname
第11行：toUpperCase、substr

## 00:04:23

在 js 开发中，我们经常会犯这样的错误：使用了不存在的变量、函数、成员

## 00:06:42

错误2：类型上的错误，上述代码直接将 myname 给默认为是一个字符串类型的数据

但是，结合实际情况来分析，我们会发现，它其实还有可能会是数字类型。

## 00:07:19

这也是我们在实际开发中非常容易犯错的一点，很多情况下，我们没有办法知道获取到的变量的数据类型是啥？

大多情况下，都是我们希望它是啥，然后就将其当做是啥类型来处理。但是，实际上，情况是多变的，很可能我们获取到的数据的数据类型和我们希望的数据类型是不一致的，这就会导致很多问题。

## 00:10:03

错误3：访问了不存在的成员

这种错误在实际开发中是及其常见的

比如说：obj 的值来自某个后端接口返回的数据，如果数据是正常的话，我们可以拿到我们想要的对应的字段；

但是，如果数据不正常的话，我们获取到的 obj 的值，很可能是 null 或者 undefined，这就意味着我们将无法获取到我们想要的数据。

## 00:10:22


## 00:10:49

这种错误，开发者很难避免

开发经验丰富一些的开发者，也许只能做好尽可能地少犯错。但是无法避免这些错误的发生。

这些问题都可以通过我们正在学习的 typescript 解决
回复@家乐:上网搜一下，js 中排名前10的错误，这类错误排名 no.1

## 00:11:48

我们想要看到的效果是：让工具帮我们，尽快发现这些最基本的错误

## 00:12:17

🤔 为什么 JS 没法直接提示我们，有哪些地方出错了呢？（以开头介绍的第一块代码为例）

## 00:13:16

JS 出现的时候，它仅仅是为了做一些浏览器上的小效果，压根就没想过能用来写大型项目

## 00:16:54

实际开发中，还有可能会出现这种错误

这是非常低级的错误，但是代码量一大，也是很有可能会出现的

## 00:20:10

由于 JS 是弱类型的，它的类型是可以发生变化的

这里我们将其视作一个固定类型来处理，JS 没法变量的定义就确定它的类型，因为中途类型可能会发生变化

## 00:21:28

由于 JS 是解释型的语言，这就导致了一个点，错误发生的时间是在运行时才会抛出。

## 00:26:06

我们下面要介绍的 ts

其实就是用来帮我们解决上述提到的这些问题的，这些问题，js 自身没法解决，但是使用 ts 的话，就可以解决。

ts 可以帮助我们缩减项目的开发周期，项目越是大型，效果越是明显。
