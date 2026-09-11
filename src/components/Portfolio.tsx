import { useState } from 'react';
import { motion, AnimatePresence } from '@/lib/nomotion';
import { X, ArrowUpLeft, ImageIcon } from 'lucide-react';
import caseImage from '@/assets/cases/case-image.png.asset.json';
import caseImage2 from '@/assets/cases/case-image-2.png.asset.json';
import caseImage3 from '@/assets/cases/case-image-3.png.asset.json';
import caseImage4 from '@/assets/cases/case-image-4.png.asset.json';
import card6 from '@/assets/cases/cover-c7.png.asset.json';
import card7 from '@/assets/cases/cover-c8.png.asset.json';
import card8 from '@/assets/cases/cover-c9.png.asset.json';
import card9 from '@/assets/cases/cover-c10.png.asset.json';



interface CaseStudy {
  id: string;
  name: string;
  cover: string;
  proof: string;
  short: string;
  stats: { value: string; label: string }[];
  details: string;
}

const caseStudies: CaseStudy[] = [{
    id: 'furniture-brand',
    name: 'Furniture Brand — B2C Performance Marketing',
    cover: card6.url,
    proof: caseImage2.url,
    short: 'من 30 ألف جنيه ل 1.05 مليون جنيه مبيعات محققين بعائد إنفاق 35 ضعف في 45 يوم',
    stats: [
      { value: '1.05M', label: 'EGP Revenue' },
      { value: '35X', label: 'ROAS' },
      { value: '45', label: 'Days' },
    ],
    details: `Turning 30K EGP Ad Spend into 1.05M EGP Revenue
ROAS: 35X | 45 Days | 35 Orders

التحدي | The Challenge
المصنع كان شغال بشكل أساسي B2B مع المعارض، وحركة السوق والكاش فلو كانت مأثرة على دورة وحركة الإنتاج، وقرر يدخل سوق الـB2C ويبيع مباشرة للعميل النهائي.
رغم وجود مميزات تنافسية واضحة — سعر أقل بحوالي 5,000 جنيه من المعارض، نفس الجودة اللي بينزلها المعارض، وضمان 5 سنوات — كان بيصرف 30 ألف جنيه إعلانات بتحقق حوالي 600K:700K EGP Sales.
المشكلة ماكانتشي في المنتج أو حجم الميزانية، كانت في طريقة تحويل الـAd Spend إلى Sales.

My Approach
بدأت بتحليل رحلة العميل بالكامل، من أول الإعلان لحد المحادثة والبيع، واكتشفت 3 نقاط رئيسية:
• الرسالة الإعلانية لم تكن تستغل الميزة التنافسية بشكل واضح.
• الـCreatives ماكانتشي مبنية على دوافع الشراء والاعتراضات.
• فريق الـModeration ماكانش شغال بـSales Process واضح لتحويل الـLeads إلى Orders.
اشتغلنا على تحسين الـConversion System بالكامل.

Strategy
01 — Audience & Message Testing
حددنا الـPersona، دوافع الشراء والاعتراضات، واختبرنا أكثر من Creative Angle. أقوى رسالة كانت مبنية على ميزة الشراء من المصدر:
1- "نفس جودة المعرض، من غير تكاليف زيادة مع ضمان 5 سنوات"
2- "وفر 5 آلاف جنيه واطلب من المصنع مباشر"

02 — Conversion System
عملت Script لفريق الـModeration يساعده لتحويل المحادثة من:
Inquiry → Qualification → Value Proposition → Objection Handling → Order
وده ساعد على رفع جودة المحادثات وربط أداء الإعلانات بعملية البيع الفعلية.

03 — Scaling & Retargeting
بعد تحديد الـAudiences والرسائل والـCreatives الأفضل، بدأنا في توسيع العناصر الفعالة تدريجيًا، واستخدمنا Retargeting للجمهور الأكثر اهتمامًا مع إضافة محتوى يدعم الـTrust زي: Product Showcase · Professional Product Visuals · Influencer (Mahmoud Nabil) · Social Proof · Scarcity / FOMO

Campaign Structure
Phase 1 — Testing (7 Days): Audience + Message + Creative Testing
Phase 2 — Scaling (21 Days): Scale Winners + Retargeting + Trust Building
Phase 3 — Conversion Push (15 Days): High-Intent Retargeting + FOMO + Clear CTA

Results
Ad Spend: 30,000 EGP
Campaign Duration: 45 Days
Qualified Messages: 2,345
Orders: 35
Revenue: 1,050,000 EGP
ROAS: 35X
Revenue Growth — Previous: ~500K EGP → After Optimization: 1.05M EGP ≈ 2.1X Revenue Growth، مع الحفاظ على نفس الـ30K EGP Ad Budget.

What I Contributed
Media Buying: Campaign Strategy · Audience Research · Creative & Message Testing · Retargeting · Budget Allocation · Campaign Optimization
Conversion Strategy: Buyer Journey Analysis · Offer Positioning · Lead Qualification · Moderation / Sales Script · Funnel Optimization
Performance Analysis: CPL / Cost per Qualified Message · Conversion Rate · Orders · Revenue · ROAS

Key Insight
النتيجة ماكانتشي بسبب Creative واحد أو Campaign واحدة. التحسن حصل لما ربطنا Audience + Message + Creative + Funnel + Sales Process في System واحد.
الهدف ماكانش الحصول على أكبر عدد من الـLeads، كان تحويل الـAd Spend إلى Qualified Conversations وبعدين Sales.
From: 30K Ad Spend → ~600:700K Sales
To: 30K Ad Spend → 1.05M Sales | ROAS: 35X | 35 Orders | 35K Average order value (انتريهات وركن)

My Role
Performance Marketer / Media Buyer — Owned the campaign strategy, audience testing, creative direction, retargeting, performance optimization, and conversion journey from ad interaction to purchase.`,
  },
  {
    id: 'womens-fashion',
    name: 'Women’s Fashion Brand — B2C Performance Marketing',
    cover: card7.url,
    proof: caseImage3.url,
    short:
      '257 ألف جنيه مبيعات من 27 ألف جنيه إعلانية، بعد اختبار 4 موديلات وتحديد الـWinner بعائد إنفاق 9 أضعاف ونص',
    stats: [
      { value: '257K', label: 'EGP Sales' },
      { value: '9.5X', label: 'ROAS' },
      { value: '29', label: 'Days' },
    ],
    details: `4 Models Tested → 1 Winner → 257,399 EGP Sales
27K EGP Ad Spend | 29 Days | ROAS 9.5X

التحدي | The Challenge
من البداية كان واضح إن أي خطوة لازم تبقى محسوبة، لأن البراند جديد والسوق تنافسي ومفيش مساحة إننا نصرف فلوس على كل حاجة زي Photoshoot احترافي ولا Creatives مكلفة ونستنى نشوف إيه اللي هيبيع.
فبدل ما نبدأ نبيع الـ4 موديلات وخلاص بشكل عشوائي، قررنا: نختبر الأول… وبعدها نعمل Stock Re ونصرف على اللي السوق اختاره ونركز عليه بشكل أكبر.

My Approach
البراند لسه جديد في السوق، صنع 4 موديلات بديزاينات مختلفة والميزانية محدودة. ما بدأناش بـPhotoshoot احترافي ولا Creatives مكلفة، بدأنا باللي نقدر نختبر بيه بسرعة: صور واقعية + فيديوهات UGC بسيطة.
وكل موديل اتجرب بأكتر من زاوية: السعر · الخامة · تجربة المنتج.
الهدف ماكانش إننا نطلع أحلى إعلان، الهدف كان نعرف: أي موديل الناس هتتفاعل معاه؟ وأي موديل مستعدين يدفعوا فيه؟
لأن مفيش مساحة أصرف على تصوير احترافي لكل موديل وأتفاجأ إن السوق أصلًا مش عايزه.

Strategy
01 — Test the 4 Models
دخلنا الـ4 موديلات في Testing، وكل موديل اتقاس بالأرقام مش بالإحساس: CTR → CPP → Sales.
ومع المتابعة بدأ الفرق يظهر: موديل واحد بدأ يطلع عن الباقي بشكل واضح — CTR أعلى + CPP أقل + مبيعات أفضل. هنا عرفنا إن عندنا Winner.
وده كان أهم قرار في الحملة: مش إننا نعرف الـ4 موديلات بيبيعوا ولا لأ، لكن إننا نعرف مين فيهم يستحق ياخد باقي الميزانية، ونعيد التصنيع منه ونزود الألوان ونعمل Photoshoot.

02 — Stop Betting on Everything
بعد ما الـWinner ظهر، ماكملناش بنفس توزيع الميزانية. ركزنا على الموديل اللي أثبت نفسه، وباقي الموديلات استخدمنا عليها Offers بهدف نمشي الـStock ونحرك الـCash Flow.
وفي نفس الوقت زودنا سعر الـWinner 10%، يعني بدل ما نضغط عليه بعروض زي باقي المنتجات، حافظنا على قيمته واستغلينا الطلب الموجود عليه لتعويض جزء من الـOffers ونحافظ على ربحية البيزنس.

03 — Scale What Works
بعد ما النتائج بقت واضحة، بدأنا نزود الميزانية والكريتيف، لكن ما غيرناش الرسالة اللي شغالة لمجرد إننا بنعمل Scaling. الـWinning Message فضلت موجودة وطورنا الـCreatives حواليها.
ومع زيادة الميزانية كنا بنتابع الـCPP والأرقام باستمرار: طالما الأداء مستحمل الـScaling نزود، ولو الأداء بدأ يتأثر نراجع ونعدل. مفيش قرار بيتاخد لمجرد إننا "حاسين" إن الحملة محتاجة تغيير.

Campaign Structure
Phase 1 — Testing: 4 Models → Different Angles → CTR + CPP + Sales → Identify the Winner
Phase 2 — Reallocation: Winner → More Budget | Other Models → Offers → Cash Flow
Phase 3 — Scaling: Increase Budget + More Creatives + Keep the Winning Message

Results
Ad Spend: 27,000 EGP
Campaign Duration: 29 Days
Total Sales: 257,399 EGP
Winner Sales: 150,000 EGP
ROAS: 9.5X
Conversion Rate: 1.20%
Models Tested: 4
وده كله لبراند لسه جديد داخل سوق Women’s Fashion تنافسي جدًا.

What I Contributed
Product Testing: Testing the 4 Models · Testing Different Angles · Price & Value Testing · UGC Testing · Real Product Content
Media Buying: Budget Allocation · Product Performance Analysis · Campaign Optimization · Winner Scaling · Creative Testing
Commercial Decisions: Identifying the Winning Product · Offers for Slow-Moving Products · Cash Flow Consideration · 10% Price Increase on the Winner

Key Insight
أنت مش محتاج تبدأ بـ4 منتجات وتصرف عليهم بنفس القوة، ومش محتاج من أول يوم تعمل Photoshoot غالي وتبني كل قراراتك على الشكل، خصوصًا لو البراند لسه جديد.
الأذكى إنك: تختبر → تعرف إيه اللي بيبيع → تصرف عليه → وتسيب السوق يحدد الـWinner.
27K Ad Spend → 257,399 EGP Sales | ROAS: 9.5X
وأهم درس للبراند الجديد: متحطش كل فلوسك في التصنيع والتصوير، من البداية لازم يبقى عندك Budget للتسويق والإعلانات، لأنك قبل ما تعرف إيه المنتج اللي هيبيع لازم تدي نفسك فرصة تختبر السوق.

My Role
Performance Marketer / Media Buyer — Owned the product testing, creative testing, budget allocation, winner identification, offer strategy, campaign optimization, and scaling decisions based on performance data.`,
  },
  {
    id: 'fashion-messaging',
    name: 'Fashion Brand — B2C Performance Marketing',
    cover: card8.url,
    proof: caseImage4.url,
    short: '2404 رسالة بتكلفة وصلت لـ1.44 جنيه بإنخفاض 65٪',
    stats: [
      { value: '2,404', label: 'Conversations' },
      { value: '1.44', label: 'EGP / Message' },
      { value: '-65%', label: 'Cost' },
    ],
    details: `Scaling Messaging Conversations While Reducing Cost per Message
4.94K EGP Ad Spend | 2,404 Conversations | Cost Dropped from 4.16 → 1.44 EGP

التحدي | The Challenge
المنتج كان تنافسي والسعر اقتصادي لكن مكانش واصل لعدد كافي من الجمهور. في البداية كانت تكلفة الـMessage حوالي 4.16 EGP وهي مقبولة، وده معناه إن لو عايزين نزود الـVolume بشكل كبير لازم نكون قادرين نحافظ على تكلفة مناسبة.
فبدل ما نزود الـBudget وخلاص، ركزنا على السؤال الأهم: إيه اللي يخلي الشخص أصلًا عايز يفتح الـMessage؟

My Approach
بدأت أتعامل مع الـFunnel على إنه مش جمهور واحد ولا رسالة واحدة. كل مرحلة ليها: Buyer Intent → Sales Angle → Creative Format → Message.
يعني الشخص اللي لسه بيتعرف على البراند مش هكلمه بنفس الطريقة اللي هكلم بيها شخص شاف المنتجات قبل كده أو أبدى اهتمام.
والـCreatives نفسها ماكانتشي بتكرر نفس الفكرة، اختبرنا Sales Angles مختلفة + Formats مختلفة، وربطنا كل رسالة بالمرحلة اللي العميل موجود فيها.

Strategy
01 — Testing Different Sales Angles
بدل ما الإعلان يقول "عندنا منتجات جديدة تعالى شوف"، اختبرنا زوايا بيع مختلفة حسب دوافع العميل:
• Product Value — ليه المنتج يستحق الشراء؟
• Price / Offer — إيه القيمة اللي هاخدها مقابل السعر؟
• Product Features — إيه اللي يميز المنتج؟
• Social Proof / Trust — ليه أثق في البراند وأشتري منه؟
الهدف كان نعرف: أي Angle بيخلّي العميل يتفاعل ويفتح الـMessage؟

02 — Match the Creative to the Angle
ماكانش كل الـAngles بتتقدم بنفس الـFormat، استخدمنا الـCreative Format اللي يخدم الرسالة:
• Product Visuals — لإظهار التفاصيل والشكل
• UGC / Real Experience — لما نحتاج نبني Trust
• Offer-Based Creatives — لما يكون السعر أو العرض هو الـHook
• Different Product Angles — لما نحتاج نوضح الاستخدام أو الـValue
الفكرة إننا ماكناش بنعمل Creatives كتير لمجرد إن عندنا Creatives كتير، كنا بنختبر: Message × Angle × Format

03 — Personalized Messaging by Funnel Stage
Cold Audience → الهدف: Attention + Product Interest
Engaged Audience → الهدف: Value + Trust
High-Intent Audience → الهدف: Offer + Clear Reason to Start a Conversation
وده خلّى الإعلان يتكلم مع العميل حسب المرحلة اللي هو فيها، بدل ما كل الناس تسمع نفس الكلام.

Campaign Structure
Phase 1 — Testing: Sales Angles + Creative Formats + Audience Testing
Phase 2 — Optimization: Identify Winning Angles + Winning Formats + Better Messaging
Phase 3 — Scaling: Increase Budget + Focus on Winners + Stage-Based Messaging

Results
Total Ad Spend: 4,943.74 EGP
Total Conversations: 2,404
Average Cost / Conversation: 2.06 EGP
Starting Cost / Conversation: 4.16 EGP
Final Cost / Conversation: 1.44 EGP
Performance Progression:
1,943.74 EGP → 467 Conversations → 4.16 EGP / Conversation
1,400 EGP → 823 Conversations → 1.70 EGP / Conversation
1,600 EGP → 1,114 Conversations → 1.44 EGP / Conversation
يعني مع زيادة الـVolume قدرنا ننزل تكلفة الـConversation من 4.16 EGP → 1.44 EGP بانخفاض حوالي 65%، وفي نفس الوقت زاد الـVolume من 467 → 1,114 Conversations.

What I Contributed
Strategy: Funnel Mapping · Sales Angle Development · Audience Segmentation · Stage-Based Messaging
Creative Testing: Creative Format Testing · UGC · Product Visuals · Offer-Based Creatives · Message × Format Testing
Media Buying: Campaign Structure · Budget Allocation · Optimization · Scaling Winning Combinations
Performance Analysis: Cost per Conversation · Conversation Volume · Creative Performance · Audience Performance · Funnel Stage Performance

Key Insight
في الـFashion، مش كل ما عايز Messages أكتر تزود الـBudget، لأن لو الـCreative والرسالة مش مقنعين أنت ببساطة هتدفع أكتر عشان تجيب نفس النتيجة.
اللي فرق هنا إننا ما تعاملناش مع Audience + Creative + Message كحاجة واحدة ثابتة، ربطنا كل واحد بالمرحلة اللي العميل موجود فيها:
Right Angle → Right Format → Right Message → Right Funnel Stage
والنتيجة: 4.94K EGP → 2,404 Conversations وتكلفة الرسالة نزلت من 4.16 EGP → 1.44 EGP، يعني Volume أعلى + Cost أقل.
وده بالنسبة لي هو الـPerformance الحقيقي: مش إنك تجيب Messages كتير، إنك تعرف إيه اللي بيجيبها وليه وتقدر تكرره على Scale.

My Role
Performance Marketer / Media Buyer — Owned the funnel strategy, sales angle testing, creative format testing, stage-based messaging, campaign optimization, budget allocation, and scaling decisions based on performance data.`,
  },
  {
    id: 'luxury-finishes',
    name: 'Luxury Finishes | Branded Interior Design — Consumer-Driven Performance Marketing',
    cover: card9.url,
    proof: caseImage.url,
    short: 'أكثر من 62 ألف شخص و93 ألف مشاهدة محتوى مع توليد 25 Lead و30 محادثة',
    stats: [
      { value: '62K+', label: 'New Reach' },
      { value: '93K', label: 'Content Views' },
      { value: '55', label: 'Leads + Chats' },
    ],
    details: `The Goal
Build a new audience base and lead generation channel worth EGP 15,000 in 30 days
93,000 impressions and content views | Reach over 62,000 new people | 25 lead collection forms | 30 message conversations

التحدي | The Challenge
التجارب السابقة كان فيها مشكلتين واضحتين: جودة الـLeads ضعيفة + تكلفة الـLead مرتفعة.
كمان الصفحة كان عليها عدد كبير من الـFake Followers، وده خلاني أستبعد جمهور الصفحة بالكامل من الحملات.
والهدف كان زيادة التعاقدات من خلال الـLeads والمكالمات والمعاينات.
بس كنت محتاج أعرف بشكل واضح: إزاي هنقدر نبني جمهور جديد من الصفر Quality Lead بالبادجت دي كبداية، ولا المشكلة في السوق نفسه؟
بدأت بكامبين Objective Form Sales على Landing Page واشتغلت على الكريتيف المتوفرة على البيدج واللي فيها محتوى تعليمي.
الحملة جابت Traffic كويس على الـLanding Page، لكن التسجيلات مفيش.
هنا قابلني تحدي في الـFunnel: الـPage سريعة، والـForm مش طويل، فالمشكلة ماكانتشي Technical — كانت في الـBuyer Journey.
كنا بنطلب من شخص لسه بيتعرف على البراند من محتوى تعليمي مفيش فيه CTA إنه يتحول مباشرة إلى Lead، وكمان الخدمة High-Ticket وقرار الشراء فيها محتاج ثقة ووقت.
لما رجعت للحياة اليومية للـPersona لاحظت إنهم معندهمش الوقت ولا المرونة للرحلة الطويلة في الـLanding Page، ومنها خدت قرار بتعديل الاستراتيجية.

The Strategic Decision
بدل العميل يضغط على الـConversion من أول تفاعل، قسمت الرحلة إلى مرحلتين:
Build the Audience → Convert the Audience
واستبعدت جمهور الصفحة بالكامل، وبدأت من Cold Audience عشان أقدر أقيس جودة الجمهور الجديد بعيدًا عن تأثير الـFake Followers.

Execution
01 — Audience Building
بدأت بـVideo Views Campaign باستهداف تفصيلي وNarrow Audience. الهدف ماكانش Views كتير، الهدف كان بناء Audience من أشخاص عندهم Real Content Consumption.
خلال أول 14 يوم:
• 93,000 Content Views
• 62,000+ New People Reached
• 37,000+ 3-Second Views
• 7,800 1-Minute Views
• 3,300+ Engagements
وده اداني قاعدة Retargeting مبنية على Behavior بدل الاعتماد على جمهور الصفحة والجمهور المشابه لهم.

02 — Retargeting
بعد بناء الجمهور، نقلت الرسالة من "اعرف البراند" إلى "ليه تختارنا؟ وإيه الخطوة التالية؟"، واستخدمت الـRetargeting مع الأشخاص الأكثر تفاعلًا ومشاهدة للمحتوى.
حجم الجمهور: 7,800 1-Minute Views و3,300+ Engagements.
الهدف كان نقل العميل من Awareness إلى Consideration ثم إلى Lead.

03 — Lead Qualification
بدل استخدام Lead Form تقليدي بـ5 أسئلة زي المنافسين وأجمع عدد كبير، استخدمت 9 أسئلة. مش بهدف زيادة عدد الأسئلة، لكن بهدف معرفة:
• طبيعة المشروع
• حجم الاحتياج
• مدى مناسبة العميل للخدمة
• التوقيت المتوقع لاتخاذ القرار
• مين الجاهز الفترة دي ومين خلال الـ3 والـ6 شهور الجايين
لأن في خدمة High-Ticket: مش كل Lead يستحق نفس القيمة والمتابعة وسرعة التواصل.

Campaign Structure
Phase 1 — Audience Building (14 Days): Cold Audience → Video Views → Engaged Audience
Phase 2 — Retargeting & Lead Generation (7 Days): Engaged Audience → Retargeting → Lead Form + Messaging

Results
Ad Spend: 15,000 EGP
Duration: 30 Days
Content Views: 93,000
New People Reached: 62,000+
3+ Sec Views: 37,000+
1-Minute Views: 7,800
Engagements: 3,300+
Lead Forms: 25
Messaging Conversations: 30
Retargeting Performance — Reach: 8,005 | Impressions: 16,247 | Frequency: 2.03 | CPM: 356 EGP

The Real Outcome
النتيجة المهمة هنا مش إننا جبنا 25 Lead أو 30 Conversation. النتيجة الأهم إننا خلال 21 يوم وبـ15K EGP خرجنا من Audience جودته غير مضمونة → إلى Audience جديد مبني على سلوك حقيقي.
وبدل ما الـFunnel يبدأ بـ Cold → Lead، أصبح: Cold → Content Consumption → Engagement → Retargeting → Lead
وده خلّى الـLead Generation مبني على جمهور سبق له التعرف على البراند، مش مجرد شخص شاف إعلان وطلبنا منه بياناته.

What I Contributed
Strategy: Buyer Journey Analysis · Funnel Architecture · Audience Acquisition Strategy · Audience Exclusion Strategy
Media Buying: Cold Audience Testing · Video Views Campaign · Retargeting · Budget Allocation · Campaign Optimization
Conversion: Lead Form Optimization · Lead Qualification · Messaging Strategy
Performance Analysis: Reach · Frequency · CPM · Video Engagement · Lead Volume · Lead Quality

Key Insight
في الـHigh-Ticket، مش دايمًا أفضل حل إنك تحاول تجيب الـLead أسرع. أحيانًا الحل إنك تأخر الـConversion شوية عشان تحسن جودة الجمهور اللي هتعمله Conversion.
Build the right audience first. Then ask for the lead.
15K EGP → 62K+ New People → 93K Content Views → 42 High-Intent Actions
والخطوة التالية في الـFunnel هي قياس: Lead → Call → معاينة → Contract، لأن الـAds ممكن تجيب الـLead، لكن في النهاية البيزنس بيكسب من الـContract.

My Role
Performance Marketer / Media Buyer — Owned the audience acquisition strategy, campaign structure, cold audience testing, retargeting, lead qualification, and performance optimization across the customer journey.`,
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="fluid-h2 font-bold text-primary">
            حملات إعلانية لبراندات إشتغلت عليها
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((cs) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors duration-500 hover:border-gold/40"
            >
              <div className="border-b border-border/50 bg-background/60">
                {cs.cover ? (
                  <img
                    src={cs.cover}
                    alt={`غلاف حملة ${cs.name}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex aspect-[4/3] w-full items-center justify-center bg-muted/30"
                  >
                    <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4 text-right sm:p-5">
                <p className="fluid-sm leading-relaxed text-foreground/90">{cs.short}</p>


                <button
                  type="button"
                  onClick={() => setActive(cs)}
                  className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-gold/50 bg-gold-rich/10 px-4 py-2 fluid-label font-bold text-primary transition-all hover:bg-gold-rich hover:text-gold-rich-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>شوف أرقام الحملة وطريقة التنفيذ</span>
                  <ArrowUpLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/85 p-4 sm:p-8"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto scrollbar-left rounded-3xl border border-gold/30 bg-card/95 backdrop-blur-xl p-5 sm:p-10 shadow-[0_25px_80px_-25px_oklch(0.78_0.16_82_/_0.5)]"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="إغلاق"
                className="absolute top-4 right-4 rounded-full bg-background/80 p-2 text-destructive transition-transform hover:scale-110"
              >
                <X className="h-8 w-8" strokeWidth={3} />
              </button>

              <h3 className="fluid-h3 font-bold text-primary mb-4 text-right ps-16">
                {active.name}
              </h3>

              <p className="fluid-body text-foreground leading-loose text-right mb-6 whitespace-pre-line">
                {active.details}
              </p>

              {active.proof && (
                <img
                  src={active.proof}
                  alt={`Proof screenshot — ${active.name}`}
                  loading="lazy"
                  className="w-full rounded-2xl border border-primary/25 mb-5"
                />
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
