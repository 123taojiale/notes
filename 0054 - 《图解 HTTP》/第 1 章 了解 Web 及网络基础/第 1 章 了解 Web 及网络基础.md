# 第 1 章 了解 Web 及网络基础

本章概述了 Web 是建立在何种技术之上，以及 HTTP 协议是如何诞生并发展的。我们从其背景着手，来深入了解这部分内容。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229103441705.png" alt="image-20211229103441705" style="zoom:50%;" />

## 1.1 使用 HTTP 协议访问 Web

你知道当我们在网页浏览器的地址栏中输入 URL 时，Web 页面是如何呈现的吗？

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229103537033.png" alt="image-20211229103537033"  />

Web 页面当然不能凭空显示出来。根据 Web 浏览器地址栏中指定的 URL，Web 浏览器从 Web 服务器端获取文件资源等信息，从而显示出 Web 页面。像这种通过发送请求获取服务器资源的 Web 浏览器等，都可称为客户端。

![image-20211229103750571](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229103750571.png)

Web 使用一种名为 HTTP 的协议作为规范，完成从客户端到服务器端等一系列运作流程。而协议是指规则的约定。可以说，**Web 是建立在 HTTP 协议上通信的**。

> - web，World Wide Web，全球广域网，也称为万维网。
> - web 浏览器，Web browser
> - 资源，resource
> - 客户端，client
>   客户端有很多种，不仅限于 web 浏览器。
> - HTTP，HyperText Transfer Protocol，超文本传输协议
>   HTTP 通常被译为超文本传输协议，但这种译法并不严谨。严谨的译名应该为“**超文本转移协议**”。但是前一译法已约定俗成，本书将会沿用。有兴趣的读者可参考图灵社区的相关讨论 ：http://www.ituring.com.cn/article/1817。—— 译者注

## 1.2 HTTP 的诞生

在深入学习 HTTP 之前，我们先来介绍一下 HTTP 诞生的背景。了解背景的同时也能了解当初制定 HTTP 的初衷，这样有助于我们更好地理解。

### 1.2.1 为知识共享而规划 Web

1989 年 3 月，互联网还只属于少数人。在这一互联网的黎明期，HTTP 诞生了。

![image-20211229104132384](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229104132384.png)

CERN 的蒂姆 • 伯纳斯 - 李（Tim BernersLee）博士提出了一种能让远隔两地的研究者们共享知识的设想。最初设想的基本理念是：借助多文档之间相互关联形成的超文本，连成可相互参阅的 WWW。现在已提出了 3 项 WWW 构建技术，分别是：

- HTML
  把 SGML 作为页面的文本标记语言的 HTML；
- HTTP
  作为文档传递协议的 HTTP；
- URL
  指定文档所在地址的 URL；

WWW 这一名称，是 Web 浏览器当年用来浏览超文本的客户端应用程序时的名称。现在则用来表示这一系列的集合，也可简称为 Web。

> - CERN，Organisation Européenne pour la Recherche Nucléaire，欧洲核子研究组织
> - 超文本，HyperText
> - WWW，World Wide Web，万维网
> - SGML，Standard Generalized Markup Language，标准通用标记语言
> - HTML，HyperText Markup Language，超文本标记语言
> - URL，UniformResource Locator，统一资源定位符

### 1.2.2 Web 成长时代

1990 年 11 月，CERN 成功研发了世界上第一台 Web 服务器和 Web 浏览器。两年后的 1992 年 9 月，日本第一个网站的主页上线了。

- 日本第一个主页
  http://www.ibarakiken.gr.jp/www/

1990 年，大家针对 HTML1.0 草案进行了讨论，因 HTML1.0 中存在多处模糊不清的部分，草案被直接废弃了。

- HTML1.0
  http://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt

1993 年 1 月，现代浏览器的祖先 NCSA 研发的 Mosaic 问世了。它以 in-line（内联）等形式显示 HTML 的图像，在图像方面出色的表现使它迅速在世界范围内流行开来。

同年秋天，Mosaic 的 Windows 版和 Macintosh 版面世。使用 CGI 技 术的 NCSA Web 服务器、NCSA HTTPd 1.0 也差不多是在这个时期出现的。

- NCSA Mosaic bounce page
  http://archive.ncsa.illinois.edu/mosaic.html

- The NCSA HTTPd Home Page（存档）
  http://web.archive.org/web/20090426182129/http://hoohoo.ncsa.illinois.edu/ （原址已失效）

1994 年 的 12 月，网景通信公司发布了 Netscape Navigator 1.0，1995 年微软公司发布 Internet Explorer 1.0 和 2.0。紧随其后的是现在已然成为 Web 服务器标准之一的 Apache，当时它以 Apache 0.2 的姿态出现在世人眼前。而 HTML 也发布了 2.0 版本。那一年，Web 技术的发展突飞猛进。时光流转，从 1995 年左右起，微软公司与网景通信公司之间爆发的浏览器大战愈演愈烈。两家公司都各自对 HTML 做了扩展，于是导致在写 HTML 页面时，必须考虑兼容他们两家公司的浏览器。时至今日，这个问题仍令那些写前端页面的工程师感到棘手。在这场浏览器供应商之间的竞争中，他们不仅对当时发展中的各种 Web 标准化视而不见，还屡次出现新增功能没有对应说明文档的情况。2000 年前后，这场浏览器战争随着网景通信公司的衰落而暂告一段落。但就在 2004 年，Mozilla 基金会发布了 Firefox 浏览器，第二次浏览器大战随即爆发。Internet Explorer 浏览器的版本从 6 升到 7 前后花费了 5 年时间。之后接连不断地发布了 8、9、10 版本。另外，Chrome、Opera、Safari 等 浏览器也纷纷抢占市场份额。

> - NCSA，National Center for Supercomputer Applications，美国国家超级计算机应用中心
> - 两次浏览器大战，自行百度

### 1.2.3 驻足不前的 HTTP

#### HTTP/0.9

HTTP 于 1990 年问世。那时的 HTTP 并没有作为正式的标准被建立。现在的 HTTP 其实含有 HTTP1.0 之前版本的意思，因此被称为 HTTP/0.9。

#### HTTP/1.0

HTTP 正式作为标准被公布是在 1996 年的 5 月，版本被命名为 HTTP/1.0，并记载于 RFC1945。虽说是初期标准，但该协议标准至今仍被广泛使用在服务器端。

- RFC1945 - Hypertext Transfer Protocol -- HTTP/1.0
  http://www.ietf.org/rfc/rfc1945.txt

#### HTTP/1.1

1997 年 1 月公布的 HTTP/1.1 是目前主流的 HTTP 协议版本。当初的标准是 RFC2068，之后发布的修订版 RFC2616 就是当前的最新版本。

- RFC2616 - Hypertext Transfer Protocol -- HTTP/1.1

  http://www.ietf.org/rfc/rfc2616.txt

可见，作为 Web 文档传输协议的 HTTP，它的版本几乎没有更新。新一代 HTTP/2.0 正在制订中，但要达到较高的使用覆盖率，仍需假以时日。

当年 HTTP 协议的出现主要是为了解决文本传输的难题。由于协议本身非常简单，于是在此基础上设想了很多应用方法并投入了实际使用。**现在 HTTP 协议已经超出了 Web 这个框架的局限，被运用到了各种场景里**。

## 1.3 网络基础 TCP/IP

TCP/IP 为了理解 HTTP，我们有必要事先了解一下 TCP/IP 协议族。**通常使用的网络（包括互联网）是在 TCP/IP 协议族的基础上运作的**。而 **HTTP 属于它内部的一个子集**。接下来，我们仅介绍理解 HTTP 所需掌握的 TCP/IP 协议族的概要。若想进一步学习有关 TCP/IP 的知识，请参考其他讲解 TCP/IP 的专业书籍。

> <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229112946957.png" alt="image-20211229112946957" style="zoom:150%;" />
>
> - TCP/IP 是互联网相关的各类协议族的总称。
> - TCP/IP 是一个协议族，也就是一个协议的集合，HTTP 协议和它之间的关系如上图所示：HTTP 协议是 TCP/IP 协议族中的一员，它是其内部的一个子集。
>
> - HTTP 协议是基于 TCP/IP 实现的，很多其他的网络通讯协议也都是基于 TCP/IP 实现的。

### 1.3.1 TCP/IP 协议族

#### protocol 是什么？

计算机与网络设备要相互通信，双方就必须基于相同的方法。比如，如何探测到通信目标、由哪一边先发起通信、使用哪种语言进行通信、怎样结束通信等规则都需要事先确定。不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则。而我们就把这种**规则**称为协议（protocol）。

> protocol，协议，可以将其理解为一种规则、约定。

#### TCP/IP 协议族

![image-20211229113533129](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229113533129.png)

协议中存在各式各样的内容。从电缆的规格（最底层的硬件）到 IP 地址的选定方法、寻找异地用户的方法、双方建立通信的顺序，以及 Web 页面显示需要处理的步骤，等等。

像这样**把与互联网相关联的协议集合起来总称为 TCP/IP**。也有说法认为，**TCP/IP 是指 TCP 和 IP 这两种协议**。还有一种说法认为，**TCP/ IP 是在 IP 协议的通信过程中，使用到的协议族的统称**。

### 1.3.2 TCP/IP 的分层管理

TCP/IP 协议族里重要的一点就是分层。TCP/IP 协议族按层次分别分为以下 4 层：应用层、传输层、网络层和数据链路层。分层管理有以下优势。

- 有助于维护

把 TCP/IP 层次化是有好处的。比如，如果互联网只由一个协议统筹，某个地方需要改变设计时，就必须把所有部分整体替换掉。而分层之后只需把变动的层替换掉即可。把各层之间的接口部分规划好之后，每个层次内部的设计就能够自由改动了。

- 有助于分工

值得一提的是，层次化之后，设计也变得相对简单了。处于应用层上的应用可以只考虑分派给自己的任务，而不需要弄清对方在地球上哪个地方、对方的传输路线是怎样的、是否能确保传输送达等问题。



TCP/IP 协议族各层的作用如下。

#### 应用层

**应用层决定了向用户提供应用服务时通信的活动。**TCP/IP 协议族内预存了各类通用的应用服务。比如，FTP 和 DNS 服务就是其中两类。 HTTP 协议也处于该层。

> - FTP，File Transfer Protocol，文件传输协议
> - DNS，Domain Name System，域名系统

#### 传输层

**传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。**在传输层有两个性质不同的协议：TCP 和 UDP。

> - TCP，Transmission Control Protocol，传输控制协议
> - UDP，User Data Protocol，用户数据报协议

#### 网络层（又名网络互连层）

**网络层用来处理在网络上流动的数据包。**数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的作用就是**在众多的选项内选择一条传输路线**。

#### 链路层（又名数据链路层，网络接口层）

**用来处理连接网络的硬件部分。**包括控制操作系统、硬件的设备驱动、NIC 及光纤等物理可见部分（还包括连接器等一切传输媒介）。**硬件**上的范畴均在链路层的作用范围之内。

> - NIC，Network Interface Card，网络适配器，即网卡

### 1.3.3 TCP/IP 通信传输流

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229115635468.png" alt="image-20211229115635468" style="zoom:80%;" />

利用 TCP/IP 协议族进行网络通信时，会通过分层顺序与对方进行通信。**发送端从应用层往下走，接收端则往应用层往上走。**我们用 HTTP 举例来说明。

- 首先作为发送端的客户端在应用层（HTTP 协议）发出一个想看某个 Web 页面的 HTTP 请求。
- 接着，为了传输方便，在传输层（TCP 协议）把从应用层处收到的数据（HTTP 请求报文）进行分割，并在各个报文上打上标记序号及端口号后转发给网络层。
- 在网络层（IP 协议），增加作为通信目的地的 MAC 地址后转发给链路层。这样一来，发往网络的通信请求就准备齐全了。

- 接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用层。当传输到应用层，才能算真正接收到由客户端发送过来的 HTTP 请求。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211229120114597.png" alt="image-20211229120114597" style="zoom:80%;" />

发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。反之，接收端在层与层传输数据时，每经过一层时会把对应的首部消去。这种把数据信息包装起来的做法称为封装。

> - 封装，encapsulate
> - 发送数据，从上到下逐层封装
> - 接收数据，从下到上逐层解封

## 1.4 与 HTTP 关系密切的协议：IP、TCP 和 DNS

下面我们分别针对在 TCP/IP 协议族中与 HTTP 密不可分的 3 个协议 （IP、TCP 和 DNS）进行说明。

### 1.4.1 负责传输的 IP 协议

#### IP 协议是什么

**按层次分，IP（Internet Protocol）网际协议位于网络层**。Internet Protocol 这个名称可能听起来有点夸张，但事实正是如此，因为几乎所有使用网络的系统都会用到 IP 协议。TCP/IP 协议族中的 IP 指的就是网际协议，在协议名称中，它占据了一半的位置，其重要性可见一斑。可能有人会把 “IP” 和 “IP 地址” 搞混，“IP” 其实是一种协议的名称。

#### IP 协议的作用

**IP 协议的作用是把各种数据包传送给对方**。若想要保证确实传送到对方那里，则需要满足各类条件。其中两个重要的条件是 IP 地址和 MAC 地址。IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的固定地址。IP 地址可以和 MAC 地址进行配对。IP 地址可变换，但 MAC 地址基本上不会更改。

> - IP 地址，它是动态分配的，是可变的。
> - MAC 地址，Media Access Control Address，媒体查询地址，它是设备的硬件地址，是不可变的。
>
> IP 协议的作用就是借助 IP 地址和 MAC 地址，将各种数据包传送给对方。

- 使用 ARP 协议凭借 MAC 地址进行通信

IP 间的通信依赖 MAC 地址。在网络上，通信的双方在同一局域网内的情况是很少的，通常是经过多台计算机和网络设备中转才能连接到对方。而在进行中转时，会利用下一站中转设备的 MAC 地址来搜索下一个中转目标。这时，会采用 ARP 协议。ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址。

> - LAN，Local Area Network，局域网
> - ARP，Address Resolution Protocol，地址解析协议
>   - [知乎 ARP协议原理](https://zhuanlan.zhihu.com/p/59066874)

- 没有人能够全面掌握互联网中的传输状况

在到达通信目标前的中转过程中，那些计算机和路由器等网络设备只能获悉很粗略的传输路线。

这种机制称为路由选择（routing），有点像快递公司的送货过程。想要寄快递的人，只要将自己的货物送到集散中心，就可以知道快递公司是否肯收件发货，该快递公司的集散中心检查货物的送达地址，明确下站该送往哪个区域的集散中心。接着，那个区域的集散中心自会判断是否能送到对方的家中。

我们是想通过这个比喻说明，无论哪台计算机、哪台网络设备，它们都无法全面掌握互联网中的细节。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230103613421.png" alt="image-20211230103613421" style="zoom:80%;" />

### 1.4.2 确保可靠性的 TCP 协议

#### TCP 协议的作用

按层次分，TCP 位于传输层，**提供可靠的字节流服务**。

- 什么是「可靠的字节流服务」？

所谓的字节流服务是指，为了方便传输，将大块数据分割成以报文段为单位的数据包进行管理。

而可靠的传输服务是指，能够把数据准确可靠地传给对方。一言以蔽之，**TCP 协议为了更容易传送大数据才把数据分割**，而且 **TCP 协议能够确认数据最终是否送达到对方**。

- 如何确保数据能到达目标？

为了准确无误地将数据送达目标处，TCP 协议采用了**三次握手策略**。用 TCP 协议把数据包送出去后，TCP 不会对传送后的情况置之不理，它一定会**向对方确认是否成功送达**。握手过程中使用了 TCP 的标志（flag）—— SYN 和 ACK。发送端首先发送一个带 SYN 标志的数据包给对方。接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。 

![image-20211230110012671](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230110012671.png)

除了上述三次握手，TCP 协议还有其他各种手段来保证通信的可靠性。

> - Byte Stream Service，字节流服务，将一个大块数据切分为若干个小块数据
> - segment，报文段
> - three-way handshaking，三次握手
> - SYN，synchronize，同步
> - ACK，acknowledgement，确认

## 1.5 负责域名解析的 DNS 服务

DNS 服务是和 HTTP 协议一样位于应用层的协议。它提供域名到 IP 地址之间的解析服务。计算机即可以被赋予 IP 地址，也可以被赋予主机名和域名。比如：「www.baidu.com」，它的 IP 地址是：「180.97.33.108」。用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP 地址访问。因为与 IP 地址的一组纯数字相比，用字母配合数字的表示形式来指定计算机名更符合人类的记忆习惯。

![image-20211230110609783](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230110609783.png)

> DNS 是比较好理解的，就拿 www.baidu.com 来举例，我们在浏览器的地址栏中输入 www.baidu.com 或 180.97.33.108 都可以跳转到百度首页。其实定位到百度首页是通过 IP 地址来定位到的。但是，相较而言，前者显然比后者更容易被我们记住，所以，就有了 DNS 服务这一玩意儿。
>
> 若将 DNS 服务比作电话普，那么，180.97.33.108 就是你电话普中一个联系人的电话，而 www.baidu.com 就是你给它的备注。

## 1.6 各种协议与 HTTP 协议的关系

学习了和 HTTP 协议密不可分的 TCP/IP 协议族中的各种协议后，我们再通过这张图来了解下 UP 协议、TCP 协议和 DNS 服务在使用 HTTP 协议的通信过程中各自发挥了哪些作用。

![image-20211230111854078](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230111854078.png)

## 1.7 URI 和 URL

与 URI 相比，我们更熟悉 URL。URL 正是使用 Web 浏览器等访问 Web 页面时需要输入的**网页地址**。比如，下图的 www.baidu.com 就是 URL。

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230113459450.png" alt="image-20211230113459450" style="zoom:50%;" />

> - URI，Uniform Resource Identifier，统一资源标识符
> - URL，Uniform Resource Locator，统一资源定位符

### 1.7.1 统一资源标识符

URI 是 UniformResourceIdentifier 的缩写。[RFC2396](https://www.ietf.org/rfc/rfc2396.txt) 分别对这 3 个单词进行了如下定义。

#### Uniform 

规定**统一的格式**可方便处理多种不同类型的资源，而不用根据上下文环境来识别资源指定的访问方式。另外，加入新增的协议方案（如 http: 或 ftp:）也更容易。

#### Resource 

资源的定义是“可标识的任何东西”。除了文档文件、图像或服务（例如当天的天气预报）等能够区别于其他类型的，全都可作为资源。另外，资源不仅可以是单一的，也可以是多数的集合体。

#### Identifier

表示可标识的对象。也称为标识符。



综上所述，URI 就是由某个协议方案表示的**资源的定位标识符**。协议方案是指访问资源所使用的协议类型名称。采用 HTTP 协议时，协议方案就是 http。除此之外，还有 ftp、mailto、telnet、file 等。标准的 URI 协议方案有 30 种左右，由隶属于国际互联网资源管理的非营利社团 ICANN 的 IANA 管理颁布。



URI 用字符串标识某一互联网资源，而 URL 表示资源的地点（互联网上所处的位置）。可见 **URL 是 URI 的子集**。



“RFC3986：统一资源标识符（URI）通用语法”中列举了几种 URI 例子，如下所示。

```yaml
ftp://ftp.is.co.za/rfc/rfc1808.txt 
http://www.ietf.org/rfc/rfc2396.txt 
ldap://[2001:db8::7]/c=GB?objectClass?one 
mailto:John.Doe@example.com 
news:comp.infosystems.www.servers.unix 
tel:+1-816-555-1212 
telnet://192.0.2.16:80/
urn:oasis:names:specification:docbook:dtd:xml:4.1.2
```

本书接下来的章节中会频繁出现URI这个术语，在充分理解的基础上，也可用URL替换URI。

> - ICANN，Internet Corporationfor Assigned Namesand Numbers，互联网名称与数字地址分配机构
>
> - IANA，Internet Assigned Numbers Authority，互联网号码分配局
>   - [IANA-UniformResourceIdentifier(URI)SCHEMES（统一资源标识符方案）](http://www.iana.org/assignments/uri-schemes)
> - 为什么说 URL 是 URI 的子集？
>   - [知乎 HTTP 协议中 URI 和 URL 有什么区别？](https://www.zhihu.com/question/21950864)
>   - URI 标识唯一的资源，标识唯一的资源有多种方式，URL 是其中一种，它通过描述该资源的位置来标识它，所以说 URL 是 URI 的子集。

### 1.7.2 URI 格式

表示指定的 URI，要使用涵盖全部必要信息的绝对 URI、绝对 URL 以及相对 URL。相对 URL，是指从浏览器中基本 URI 处指定的 URL，形如 /image/logo.gif。



让我们先来了解一下绝对 URI 的格式。



![image-20211230115838454](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211230115838454.png)



使用 http: 或 https: 等协议方案名获取访问资源时要**指定协议类型**。**不区分字母大小写，最后附一个冒号`:`**。也可使用 data: 或 javascript: 这类指定数据或脚本程序的方案名。

```tex
                    hierarchical part
        ┌───────────────────┴─────────────────────┐
                    authority               path
        ┌───────────────┴───────────────┐┌───┴────┐
  abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
  └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘
scheme  user information     host     port                  query         fragment

  urn:example:mammal:monotreme:echidna
  └┬┘ └──────────────┬───────────────┘
scheme              path
```

> `[协议名]://[用户名]:[密码]@[服务器地址]:[服务器端口号]/[路径]?[查询字符串]#[片段ID]`

#### 登录信息（认证）

指定用户名和密码作为从服务端获取资源时必要的登录信息（身份认证）。此项是**可选项**。

#### 服务器地址

使用绝对 URI 必须指定待访问的服务器地址。地址可以是类似 www.baidu.com 这种 DNS 可解析的名称，或是 180.97.33.108 这类 IPv4 地址名，还可以是 [0:0:0:0:0:0:0:1] 这样用方括号括起来的 IPv6 地址名。

#### 服务器端口号

指定服务器连接的网络端口号。此项也是**可选项**，若用户省略则自动使用**默认端口号**。（HTTP 服务默认端口是 80）

#### 带层次的文件路径

**指定服务器上的文件路径**来定位特指的资源。这与 UNIX 系统的文件目录结构相似。

#### 查询字符串

针对已指定的文件路径内的资源，可以使用查询字符串传入任意参数。此项**可选**。

#### 片段标识符

使用片段标识符通常可标记出已获取资源中的子资源（文档内的某个位置）。但在 RFC 中并没有明确规定其使用方法。该项也为可选项。

> 上面提到的是 URI 的格式，而 URL 的格式主要由以下 3 部分组成
>
> - scheme，协议（或称为服务方式）
> - hostname，存有该资源的主机IP地址（有时也包括端口号）
> - path，机资源的具体地址

#### 补充

并不是所有的应用程序都符合 RFC，有一些用来制定 HTTP 协议技术标准的文档，它们被称为 RFC。



通常，应用程序会遵照由 RFC 确定的标准实现。可以说，**RFC 是互联网的设计文档**，要是不按照 RFC 标准执行，就有可能导致无法通信的状况。比如，有一台 Web 服务器内的应用服务没有遵照 RFC 的标准实现，那 Web 浏览器就很可能无法访问这台服务器了。



由于不遵照 RFC 标准实现就无法进行 HTTP 协议通信，所以基本上客户端和服务器端都会以 RFC 为标准来实现 HTTP 协议。但也存在某些应用程序因客户端或服务器端的不同，而未遵照 RFC 标准，反而将自成一套的“标准”扩展的情况。



不按 RFC 标准来实现，当然也不必劳心费力让自己的“标准”符合其他所有的客户端和服务器端。但设想一下，如果这款应用程序的使用者非常多，那会发生什么情况？不难想象，其他的客户端或服务器端必然都不得不去配合它。



实际在互联网上，已经实现了 HTTP 协议的一些服务器端和客户端里就存在上述情况。说不定它们会与本书介绍的 HTTP 协议的实现情况不一样。



本书接下来要介绍的 HTTP 协议内容，除去部分例外，基本上都以 RFC 的标准为准。



> - Request for Comments，征求修正意见书
