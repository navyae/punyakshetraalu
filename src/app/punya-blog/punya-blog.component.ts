import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punya-blog',
  templateUrl: './punya-blog.component.html',
  styleUrls: ['./punya-blog.component.less']
})
export class PunyaBlogComponent implements OnInit {

  constructor() { }

  articlesList = [
    {
      articleId:1,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:2,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    },
    {
      articleId:3,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:4,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    },
    {
      articleId:5,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:6,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    },
    {
      articleId:7,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:8,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    },
    {
      articleId:9,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:10,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    },
    {
      articleId:11,
      articleImage: 'http://s3.india.com/travel/wp-content/uploads/2016/01/14tamil-nadu-temple-meenakshi-temple-madurai.jpg',
      articleContent:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem I',
      articleTitle:'Where does it come from?'
    },
    {
      articleId:12,
      articleImage: 'http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg',
      articleContent:'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      articleTitle:'Where can I get some?'
    }
  ]

  ngOnInit() {
  }

}
