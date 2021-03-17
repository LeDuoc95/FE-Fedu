/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import { WrapperTermAndPrivacyPolicyStyle, TitleTermAndPrivacyPolicyStyle, DescriptionTermAndPrivacyPolicyStyle, TermOfTermAndPrivacyPolicyStyle } from "screens/style";

import { WrapperPage } from "screens/style";

const data_term_of_user = [
  {
    title: "Tổng quan",
    des: "Thỏa thuận người dùng này áp dụng cho mọi khách truy cập và sử dụng dịch vụ của chúng tôi. Xin vui lòng đọc kỹ thỏa thuận này để nắm rõ về việc giải quyết những khiếu nại giữa bạn và chúng tôi thay vì việc tố tụng.",
  },
  {
    title: "Chính sách riêng tư",
    des: "Chính sách riêng tư của chúng tôi được lồng ghép với thỏa thuận người dùng. Xin vui lòng đọc kĩ phần này để biết thêm các chi tiết liên quan tới việc thu thập, sử dụng và công bố thông tin cá nhân của bạn.",
  },
  {
    title: "Những tính năng và dịch vụ dành cho mỗi cá nhân",
    des:
      "Khi sử dụng dịch vụ trên trang web của chúng tôi, bạn sẽ nhận được những hướng dẫn và quy định liên quan đến từng dịch vụ, lời đề nghị và các tính năng cụ thể theo từng giai đoạn. Mọi hướng dẫn như vậy đều được lồng ghép với thỏa thuận người dùng. Vui lòng kiểm tra lại những điều khoản ngoài liên quan đến dịch vụ được cung cấp bởi các bên đối tác của chúng tôi trước khi sử dụng.",
  },
  {
    title: "Sửa đổi",
    des:
      "Chúng tôi có thể thay đổi, xóa hoặc thêm vào các điều khoản trong thỏa thuận này tại bất cứ thời điểm nào. Những thay đổi này sẽ có hiệu lực đối với những người dùng hiện tại theo thứ tự như sau: (i) 30 ngày sau khi chúng tôi thông báo về những thay đổi, không kể thông qua trang web, ứng dụng trên điện thoại, gửi qua địa chỉ e-mail hay dưới bất kì hình thức nào khác; hoặc (ii) khi bạn lựa chọn đồng ý với những thay đổi hoặc một phiên bản mới của thỏa thuận này có kèm sửa đổi. Nếu bạn gửi một thông báo thể hiện sự không đồng ý với thay đổi được đề xuất hoặc từ chối chấp nhận thay đổi, chúng tôi có thể (tùy ý) cho phép bạn tiếp tục sử dụng các dịch vụ trên trang web cũng như ứng dụng trên điện thoại hoặc không.",
  },
  {
    title: "Điều kiện cho phép sử dụng dịch vụ",
    des: "Bạn chỉ có thể sử dụng được những dịch vụ do chúng tôi cung cấp sau khi đã hoàn tất việc đăng kí tài khoản, đồng ý với những quy định do chúng tôi đưa ra, lựa chọn khóa học phù hợp và thanh toán học phí.",
  },
  {
    title: "Các quyền sở hữu",
    des:
      "Dịch vụ, trang web và ứng dụng điện thoại đều được sở hữu và vận hành bởi chúng tôi. Mọi videos, nội dung, giao diện trực quan, thông tin, đồ họa, thiết kế, biên tập, mã máy tính, sản phẩm, phần mềm, các dịch vụ và những thành phần khác trên trang web và ứng dụng điện thoại đều có bản quyền thuộc về tác giả Việt Nam, bằng sáng chế, luật thương hiệu, các công ước quốc tế, tất cả những tài sản trí tuệ cùng với các quyền sở hữu có liên quan và pháp luật hiện hành. Trừ khi được cho phép bởi chúng tôi, bạn không được bán, cấp phép, phân phối, sao chép, sửa đổi, công bố công khai, lan truyền, xuất bản, chỉnh sửa, điều chỉnh, tạo ra các sản phẩm bắt nguồn từ, hoặc sử dụng trái phép các tài liệu của chúng tôi.",
  },
  {
    title: "Đăng kí",
    des:
      "Để sử dụng được những dịch vụ do chúng tôi cung cấp, người dùng cần đăng kí và tạo một tài khoản thông qua trang web hoặc ứng dụng trên điện thoại. Việc đăng kí bao gồm: (i) tạo một tên người dùng và mật khẩu duy nhất; (ii) cung cấp địa chỉ e-mail và (iii) số điện thoại. Xin lưu ý rằng chúng tôi không có quyền tiếp cận thông tin về thẻ dùng để thanh toán của bạn và đảm bảo rằng mọi thông tin được cung cấp là chính xác, cập nhật và hoàn chỉnh. Những thông tin này sẽ được chúng tôi giữ nguyên, bảo mật và chỉ thay đổi khi bạn mong muốn.",
  },
  {
    title: "Mật khẩu",
    des:
      "Bạn sẽ được yêu cầu nhập một mật khẩu khi đăng kí tài khoản. Lưu ý hãy giữ bí mật thông tin về mật khẩu vì bạn sẽ chịu trách nhiệm với toàn bộ việc thanh toán học phí và những hoạt động dưới tài khoản của mình, trừ trường hợp bạn có chủ ý chuyển nhượng tài khoản cho một người học khác. Xin vui lòng liên hệ với chúng tôi ngay sau khi phát hiện tài khoản không đăng nhập được hoặc đã bị trộm, chỉ trừ trường hợp tài khoản của bạn bị vô hiệu do đã vi phạm một trong những điều khoản sử dụng của chúng tôi.",
  },
  {
    title: "Phủ nhận/Không bảo đảm",
    des:
      "Chúng tôi và những đối tác hoặc các bên thứ ba cam kết sẽ cố gắng mang đến cho người dùng những sản phẩm tốt nhất nhưng không đảm bảo các dịch vụ đưa ra không xảy ra rủi ro hoặc những lỗi được báo cáo sẽ được xử lí ngay sau đó. Mọi vấn đề phát sinh trong quá trình học xin vui lòng thông báo cho chúng tôi để giải quyết trong thời gian sớm nhất có thể.",
  },
  {
    title: "Chính sách hoàn tiền",
    des: "Mọi trường hợp muốn hoàn lại tiền vui lòng liên hệ lại với chúng tôi. Chúng tôi sẽ làm việc với bạn để xác minh và giải quyết trong thời gian sớm nhất.",
  },
];

const data_privacy_policy = [
  {
    title: "Tổng quan",
    des: "Chúng tôi biết bạn luôn quan tâm về việc những thông tin cá nhân được sử dụng và chia sẻ ra sao cũng như đánh giá cao sự tin tưởng của các bạn, do vậy, chúng tôi sẽ thực hiện điều này một cách cẩn thận và hợp lí nhất có thể.",
  },
  {
    title: "Thông báo về việc thu thập và sử dụng thông tin cá nhân",
    des:
      "Mục đích ban đầu của chúng tôi trong việc thu thập thông tin cá nhân là để cung cấp cho người dùng trải nghiệm an toàn, mượt mà, hiệu quả và được cá nhân hóa. Điều này cho phép chúng tôi cung cấp những dịch vụ và tiện ích đáp ứng được nhu cầu của bạn cũng như tùy chỉnh các dịch vụ giúp cho trải nghiệm của bạn trở nên dễ dàng và tuyệt vời hơn. Bạn có thể duyệt các phần của trang web mà không cần cung cấp cho chúng tôi các thông tin cá nhân mang tính định danh. Chúng tôi chỉ thu thập các thông tin cá nhân được bạn tự nguyện cung cấp thông qua việc đăng kí trên trang web cũng như trên ứng dụng điện thoại trong các trường hợp sử dụng nhất định. Bạn có thể chọn không cung cấp cho chúng tôi một số thông tin nhất định nhưng điều này sẽ khiến bạn không tận dụng được hết các tính năng và chức năng của trang web cũng như ứng dụng. Chúng tôi sử dụng các thông tin cá nhân để cung cấp trang web và ứng dụng tới người dùng cũng như phát triển việc phân tích, tổng hợp dữ liệu để cải thiện sản phẩm. Bạn sẽ không còn vô danh với chúng tôi một khi cung cấp những thông tin cá nhân của mình. Ngoài những mục đích sử dụng cụ thể được phác thảo bên dưới, chúng tôi thường sử dụng các thông tin cá nhân thu thập được cho những mục đích sau: Tạo và duy trì tài khoản người dùng; Cung cấp cho người dùng các tính năng và chức năng của trang web và ứng dụng; Cá nhân hóa nội dung cung cấp cho người dùng dựa trên tính cách và sở thích; Cải thiện trang web, ứng dụng cũng như các sản phẩm và dịch vụ khác; Khắc phục các sự cố, đưa ra các thông báo bắt buộc, thực thi Quy định đối với người dùng (VD: trường hợp cần bảo vệ quyền sở hữu trí tuệ của một bên thứ ba hoặc các quyền sở hữu), thông báo cho người dùng về những thay đổi trong các chính sách hoặc thỏa thuận có ảnh hưởng tới việc sử dụng trang web hoặc ứng dụng.",
  },
  {
    title: "Thông tin thu thập về người dùng trang web",
    des:
      "Cookies - Một “cookie” là một tập tin văn bản nhỏ được lưu lại trong máy tính của người dùng với mục đích lưu trữ. Chúng tôi sử dụng cả phiên ID và cookies thường trên trang web của mình. Một cookie sử dụng phiên ID sẽ hết hạn khi bạn đóng trình duyệt và việc sử dụng cookies dạng phiên giúp bạn điều hướng trang web dễ dàng hơn. Một cookie thường sẽ được giữ lại trong ổ cứng của bạn trong một khoảng thời gian được gia hạn. Bạn có thể xóa các cookies thường bằng cách làm theo các chỉ dẫn được cung cấp trong dữ liệu “Trợ giúp” của trình duyệt mạng. Chúng tôi cài cặt cookie thường để lưu lại mật khẩu giúp cho bạn không cần gõ lại mật khẩu trong lần truy cập sau. Các cookies thường còn giúp cho chúng tôi kiểm tra và xác định được sở thích của người dùng nhằm tăng cường trải nghiệm trên trang web. Chúng tôi sử dụng những dịch vụ tiếp thị do Google và những bên thứ ba cung cấp để người dùng vẫn có thể trông thấy các quảng cáo ở nơi khác trên mạng sau khi họ đã rời khỏi trang web của chúng tôi. Hình thức phổ biến này được gọi là “Remarketing” – “Tiếp thị lại”. Người dùng sẽ không thấy nhiều quảng cáo ngoài hơn mà thực chất, những quảng cáo họ trông thấy sẽ liên quan đến các sản phẩm và dịch vụ của chúng tôi nhiều hơn. Google và bất kì nhà cung cấp các dịch vụ tiếp thị thứ ba nào được chúng tôi sử dụng đều dùng cookies như một phần trong các dịch vụ tiếp thị lại. Nếu bạn không chọn cookies ở phần cài đặt trình duyệt của mình, bạn vẫn có thể sử dụng trang web của chúng tôi nhưng sẽ bị hạn chế ở một số phần nhất định.",
  },
  {
    title: "Đăng kí",
    des:
      "Trong quá trình đăng kí, bạn sẽ phải cung cấp những thông tin liên lạc trung thực theo đúng Quy định dành cho người dùng của chúng tôi, bao gồm: (1) một tên tài khoản và mật khẩu duy nhất, (2) địa chỉ e-mail- của bạn, (3) đất nước nơi bạn cư trú, (4) sở thích ngôn ngữ và (5) giới tính của bạn. Chúng tôi sử dụng những thông tin này để tạo tài khoản cho bạn trên trang web cũng như trên ứng dụng điện thoại, liên hệ với bạn về những dịch vụ được bạn quan tâm và cung cấp những trải nghiệm phù hợp nhất dựa trên sự ưu tiên của bạn (VD: thông tin về đất nước nơi bạn cư trú giúp chúng tôi cung cấp cho bạn một giáo viên đang làm việc trong múi giờ tương ứng).",
  },
  {
    title: "Sử dụng thông tin",
    des:
      "Với mục đích mang đến trải nghiệm tốt nhất cho người dùng, chúng tôi sẽ thu thập dữ liệu về việc sử dụng trang web và ứng dụng của bạn, bao gồm (nhưng không giới hạn) ở những điều sau đây: (1) thời gian tiết học, (2) những tính năng của trang web được bạn sử dụng, (3) thời điểm bạn truy cập trang web, ứng dụng điện thoại và các tính năng liên quan. Chúng tôi có thể sử dụng những thông tin trên đây như đã nêu ở Chính sách riêng tư này. Chúng tôi sử dụng Google Analytics, trong đó bao gồm các bản ghi và “cookies” (xem ở mục trên) để theo dõi một cách tổng hợp những thông tin nhất định về khách truy cập vào trang web. Dịch vụ này ghi lại những con số thống kê về cách và khối lượng sử dụng cho phép chúng tôi phân tích được việc sử dụng trang web. Bạn có thể tìm hiểu thêm về cách Google Analytics thu thập thông tin tại: http://www.google.com/analytics/",
  },
  {
    title: "Trao đổi thông tin",
    des:
      "Chúng tôi sẽ thu thập lại phản hồi từ người dùng bởi những thông tin này rất cần thiết cho việc giải quyết các tranh chấp, hỗ trợ người dùng và khắc phục các sự cố theo như pháp luật cho phép. Nếu bạn gửi cho chúng tôi những trao đổi mang tính cá nhân như thư viết tay hoặc thư điện tử, hoặc trong trường hợp những người dùng hay một bên thứ ba nào gửi cho chúng tôi thông tin về các hoạt động hoặc những bài viết của bạn trên trang web hay ứng dụng điện thoại, chúng tôi có thể sẽ thu thập những thông tin đó trong một dữ liệu dành riêng cho bạn.",
  },
  {
    title: "Các ưu đãi đặc biệt và cập nhật thông tin",
    des:
      "Chúng tôi sẽ thường xuyên gửi đến người dùng những thông tin về các sản phẩm, dịch vụ và các khuyến mãi đặc biệt thông qua địa chỉ e-mail được người dùng cung cấp trong quá trình đăng kí. Khi nhận được thư điện tử liên quan tới việc quảng cáo của một bên thứ ba, bạn sẽ có thể lựa chọn có hoặc không nhận những thư điện tử này như trong luật hiện hành quy định. Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn tới các bên thứ ba với mục đích quảng cáo mà không có sự cho phép của bạn.",
  },
  {
    title: "Những thông báo liên quan tới dịch vụ",
    des:
      "Chúng tôi sẽ gửi cho bạn những thông báo liên quan chặt chẽ đến dịch vụ trong những trường hợp đặc biệt. VD: nếu các dịch vụ của chúng tôi phải tạm dừng vì lí do bảo trì, chúng tôi sẽ thông báo tới người dùng qua địa chỉ e-mail. Bạn không nên bỏ nhận những thông tin này bởi chúng không phải dành cho việc quảng cáo. Để không phải nhận những e-mail này, bạn có thể hủy kích hoạt tài khoản của mình.",
  },
  {
    title: "Dịch vụ khách hàng",
    des: "Chúng tôi sẽ trả lời những thắc mắc của bạn, cung cấp những dịch vụ bạn yêu cầu và quản lí tài khoản của bạn thông qua địa chỉ e-mail bạn sử dụng để đăng kí trên trang web hoặc ứng dụng trên điện thoại.",
  },
  {
    title: "Tổng hợp thông tin (Không định danh)",
    des: "Chúng tôi có thể chia sẻ thông tin tổng hợp về cơ sở người dùng tới các bên quảng cáo hiện tại và đối tác kinh doanh tiềm năng. Tuy nhiên, những thông tin này sẽ không giúp xác định bất cứ người dùng cụ thể nào.",
  },
  {
    title: "Những người dùng khác",
    des: "Nếu bạn liên lạc với những người dùng của trang web hay ứng dụng điện thoại khác, những người dùng này sẽ có thể có được tên tài khoản của bạn cũng như bất cứ thông tin cá nhân nào bạn lựa chọn chia sẻ với họ.",
  },
  {
    title: "Giáo viên",
    des: "Nếu bạn tham gia vào một tiết học hoặc trong bất kì liên lạc nào với giáo viên, những giáo viên này sẽ nhận được tên tài khoản của bạn cũng như những thông tin cá nhân nào bạn đã chia sẻ trong tiết học. Các giáo viên có thể bao gồm bất cứ thông tin nào được bạn cung cấp ở trong mục ghi chú (xem mục “Ghi chú của giáo viên” ở phía trên).",
  },
  {
    title: "Các đối tác kinh doanh",
    des:
      "Chúng tôi có thể cung cấp những thông tin không mang tính định danh cho một bên thứ ba theo như thỏa thuận kinh doanh với họ, bao gồm (nhưng không giới hạn) việc phối hợp cung cấp một sản phẩm hoặc dịch vụ cho khách hàng hoặc tạo ra khả năng tương tác giữa các sản phẩm và dịch vụ của chúng tôi và các sản phẩm và dịch vụ của các bên đối tác.",
  },
  {
    title: "Những nhà cung cấp dịch vụ",
    des:
      "Chúng tôi có thể sử dụng các nhà thầu và các bên cung cấp dịch vụ thứ ba có liên quan tới trang web và ứng dụng trên điện thoại. Khi những nhà thầu hoặc nhà cung cấp dịch vụ tiếp cận được với những thông tin cá nhân của bạn, họ đều được yêu cầu phải bảo mật chúng theo phương thức nhất quán với Chính sách riêng tư này, VD: không sử dụng các thông tin đó cho bất kì mục đích nào ngoài việc tiến hành cung cấp các dịch vụ cho chúng tôi.",
  },
  {
    title: "Những trường hợp công bố thông tin khác",
    des: "Chúng tôi có quyền công bố thông tin cá nhân của người dùng hoặc bất cứ thông nào khác được luật yêu cầu hoặc khi chúng tôi nhận thấy sự công bố đó là cần thiết để bảo vệ quyền lợi của mình hoặc của một bên thứ ba.",
  },
  {
    title: "Đường dẫn tới những trang web khác",
    des:
      "Trang web và ứng dụng trên điện thoại có thể bao gồm các đường dẫn tới những trang web không thuộc quyền sở hữu và điều khiển bởi chúng tôi vì thế chúng tôi không chịu trách nhiệm đối với những chính sách riêng tư của những trang web đó. Chúng tôi khuyến khích người dùng nên thận trọng mỗi khi thoát khỏi trang web hoặc ứng dụng và hãy đọc kĩ những chính sách riêng tư của những trang web có thu thập thông tin cá nhân. Chính sách riêng tư này chỉ được áp dụng với những thông tin được thu thập bởi trang web và ứng dụng của chúng tôi.",
  },
  {
    title: "Truy cập thông tin cá nhân",
    des: "Nếu thông tin cá nhân của bạn thay đổi hoặc bạn muốn ngưng sử dụng dịch vụ của chúng tôi, bạn có thể sửa đổi, cập nhật, xóa hoặc hủy kích hoạt chúng bằng cách thay đổi trên trang thông tin thành viên của chúng tôi, gửi e-mail tới bộ phận Hỗ trợ khách hàng.",
  },
  {
    title: "Bảo mật",
    des:
      "Chúng tôi sử dụng những tiêu chuẩn nghành được áp dụng rộng rãi hiện nay để bảo vệ các thông tin cá nhân được gửi tới cả trong quá trình truyền tải và khi đã nhận được. Tuy nhiên, không có phương thức truyền tải qua mạng hoặc lưu trữ điện tử nào là an toàn 100%. Do đó, trong khi chúng tôi luôn cố gắng sử dụng những phương thức thương mại đã được chấp nhận để bảo vệ thông tin cá nhân của bạn, chúng tôi không thể đảm bảo an ninh tuyệt đối của nó",
  },
  {
    title: "Những thay đổi về Chính sách riêng tư",
    des:
      "Nếu quyết định thay đổi Chính sách riêng tư của mình, chúng tôi sẽ công bố những thay đổi đó trong phần Chính sách riêng tư này và tại một số nơi thích hợp khác để bạn có thể biết được những loại thông tin chúng tôi thu thập, cách chúng tôi sử dụng chúng và những trường hợp chúng được công khai. Chúng tôi có quyền điều chỉnh Chính sách riêng tư này tại bất kì thời điểm nào và những thay đổi sẽ được áp dụng với thông tin bạn cung cấp hoặc những hoạt động của bạn trên trang web hoặc ứng dụng ngay sau khi thay đổi được công bố, vì vậy hãy thường xuyên xem lại chính sách này. Nếu chúng tôi đưa ra những thay đổi có ảnh hưởng tới việc sử dụng sản phẩm hoặc công bố thông tin cá nhân đã thu thập trước đó, chúng tôi sẽ liên hệ với bạn thông qua e-mail hoặc thông báo trên trang web và ứng dụng để có được sự chấp thuận của bạn giúp những thay đổi trong Chính sách riêng tư được áp dụng một cách nghiêm túc.",
  },
];

const TermsAndPrivacyPolicy = ({ type }) => {
  return (
    <WrapperPage login>
      <Header />
      <WrapperTermAndPrivacyPolicyStyle>
        <TitleTermAndPrivacyPolicyStyle>{type === "terms-of-use" ? "Điều Khoản Sử Dụng" : "Chính Sách Riêng Tư"} </TitleTermAndPrivacyPolicyStyle>
        {(type === "terms-of-use" ? data_term_of_user : data_privacy_policy).map((item) => (
          <div>
            <TermOfTermAndPrivacyPolicyStyle>{item.title}</TermOfTermAndPrivacyPolicyStyle>
            <DescriptionTermAndPrivacyPolicyStyle>{item.des}</DescriptionTermAndPrivacyPolicyStyle>
          </div>
        ))}
      </WrapperTermAndPrivacyPolicyStyle>
      <Footer />
    </WrapperPage>
  );
};

export default TermsAndPrivacyPolicy;
