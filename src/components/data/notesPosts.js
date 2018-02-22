export const posts = [];

class NotesPost {
    constructor(
      articleDate='2017-12-01',
      articleTitle='default article', 
      articleDescription='Default article, without any description',
      articleDescriptionLong='No article content yet.',
      articleTldr=[], 
      externalLinks={'No link, sovy':'#'},
      linkToArticle='article_'
    
    ) 
      {
      this.articleId = idCount++;
      this.articleDate = articleDate;
      this.articleTitle = articleTitle;
      this.articleDescription = articleDescription;
      this.articleDescriptionLong = articleDescriptionLong;
      this.articleTldr = articleTldr;
      this.externalLinks = externalLinks;
      this.linkToArticle = linkToArticle;
      posts.push(this);
    }
  }

  let idCount = 0;


const pirmasStraipsnis = new NotesPost(
  '2017-11-16',
  'Top design tips for non designers',
  'Design is hard, especially if you are on dwelling on technical side of the brain. But we have shortcuts.',

    'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
    ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
    ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
    ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
    'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
    ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
    'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
    'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
    ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
    ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Shapes/Space','2.Fonts.', '3.Color.', '4.Tricks.',],
  {'Design resources by Tim Tim:':'#',
  'Help for new designers:':'#'},
  'top_design_tips_for_non_designers'
);
const antrasStraipsnis = new NotesPost(
  '2017-12-15',
  'Animation principles. How to move stuff',
  'Why your animations look so unnatural, and how to make them better.',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Ease-in/Ease-out.','2.Drag.', '3.Squish', '4.Dar kazkas.'],
  {'Design resources by Tim Tim:':'#',
  'Help for new designers:':'#'},
  'animation_principles_for_dummies'
);
const treciasStraipsnis = new NotesPost(
  '2018-01-10',
  'Technical SEO, for non-technical people',
  'SEO is not that hard, let me help you.',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Keyword reasearch','2.Basics. <meta>, links, titles', '3.Speed, robots.txt, technical stuff'],
  {'Design resources by Tim Tim:':'#',
  'Help for new designers:':'#'},
  'technical_SEO_for_non-technical_people'
);
const ketvirtas = new NotesPost(
  '2018-01-15',
  'European Data Protection Directive',
  'What it all means for web developers',

  'DISCLAIMER! I m am not a lawyar, so take my words with a grain of salt.'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Keyword reasearch','2.Basics. <meta>, links, titles', '3.Speed, robots.txt, technical stuff'],
  {'Design resources by Tim Tim:':'#',
  'Help for new designers:':'#'},
  'european_data_protection_directive_2018'
);


export default NotesPost;