import type { Project, Category } from '@/types/project'

export const categories: Category[] = [
  { id: 'work', name: '業務経験' },
  { id: 'personal', name: '個人開発' },
  { id: 'team', name: 'チーム開発' }
]

export const projects: Project[] = [
  {
    id: 1,
    categoryId: 'work',
    title: 'LiberT インターン',
    shortDescription: 'Webサイト改善とカレンダーアプリ開発',
    period: '2023年',
    description: `インターン先企業の既存Webサイトの改善とカレンダーアプリの開発に従事しました。

    Webサイト改善では、ユーザビリティの向上を目指し、既存サイトの改善提案、実装までを担当。特に、レスポンシブデザインの実装に注力しました。

    カレンダーアプリ開発では、特定のターゲット層に向けた機能を実装。プロジェクトは途中で中断となりましたが、フロントエンドからバックエンドまでの一貫した開発経験を得ることができました。

    この経験を通じて、実際の業務における開発プロセス、チームでの協働、タイムマネジメントの重要性を学びました。`,
    teamStructure: `2人のインターン生でタスクを分担し、社員の方のサポートを受けながら進行。

    Webサイト改善フェーズ：
    - チームメンバーと改善点の洗い出しとタスクの優先順位付け
    - 定期的な進捗報告と方針調整ミーティングの実施
    - コードレビューを通じた品質管理

    カレンダーアプリ開発フェーズ：
    - 当初はフロントエンド担当として参加
    - プロジェクト途中からバックエンド開発にも参画`,
    technicalExperience: [
      'Flutterフレームワークの実践的な使用とアーキテクチャ設計',
      'Githubを用いたバージョン管理とチーム開発(ブランチ戦略)',
      'Docker環境での開発(コンテナ設定、環境構築)',
      'Prismaを使用したデータベース操作とスキーマ設計',
      'REST APIの実装',
      'ユーザビリティを考慮したUI/UX設計',
      'レスポンシブデザインの適用'
    ],
    learnings: `公式ドキュメントベースでFlutterの学習を進めたことで、UI構築言語の基礎を確実に身につけることができました。また、チーム開発の基礎となるGitの使用方法も学びました。`,
    technologies: ['Flutter', 'Github', 'Docker', 'Prisma', 'TypeScript']
  },
  {
    id: 2,
    categoryId: 'work',
    title: 'SICM細胞画像の超解像研究',
    shortDescription: '研究室での画像処理研究',
    period: '2023年～現在',
    description: `走査型イオン伝導顕微鏡(SICM)で撮影された細胞画像の超解像技術の研究開発に従事しています。
    
    研究の背景
    SICMは非侵襲的に生きた細胞の形状を観察できる特徴を持ちますが、高解像度での撮影には長時間を要するという課題がありました。そこで、低解像度画像から機械学習により高解像度画像を生成することで、観察時間の短縮と細胞への負荷軽減を目指しています。

    研究内容：
    - 既存の超解像モデルの細胞画像への適用可能性の検証
    - データ拡張手法の効果検証
    - モデルの最適化とパフォーマンス評価

    機械学習の経験がない状態からスタートし、基礎的な理論から実践的な実装まで、段階的に学習を進めています。`,
    teamStructure: `研究室でのアルバイトとして担当。学部一年生の時に熱心に取り組んだ授業の教授からのお誘いがきっかけです。
`,
    technicalExperience: [
      'ESRGAN-Pytorchのコード解析と最適化',
      'データ拡張技術の設計と実装(回転、反転、ノイズ付加など)',
      'RealESRGANのファインチューニング手法の検証・拡張',
      '学習データの前処理',
      'モデルの評価指標の実装'
    ],
    learnings: `実践的な機械学習と文献調査の経験を得ることができました。
    `,
    technologies: ['Python', '機械学習', '画像処理']
  },
  {
    id: 5,
    categoryId: 'team',
    title: 'ゲームイベント技術支援',
    shortDescription: 'コミュニティイベントの技術サポート',
    period: '2024年10月～',
    description: `配信者様主催のOmega Strikersコミュニティ(非公式)イベントにて、ゲームデータの集計・整理システムの構築を担当しています。
    また、ゲームイベントオーガナイザー「Upper Crab」様での大会運営のための技術ボランティアとして、応募・登録フォームの制作とアカウント機能の実装を行っています。`,
    teamStructure: 'コミュニティイベントの技術担当として参加',
    technicalExperience: [
      'データ集計・整理システムの設計と実装',
      'ユーザー登録・認証システムの構築',
      'MySQLを使用したデータベース設計'
    ],
    // TODO: add technologies
    technologies: ['HTML', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    id: 4,
    categoryId: 'team',
    title: 'Engineer Guildハッカソン2024',
    shortDescription: 'Uberライクなマッチングアプリのプロトタイプ開発',
    period: '2024年11月',
    description:
      '初めてのハッカソン参加。観光客と現地案内人(一般人)をマッチングするUberライクなアプリのプロトタイプ開発に挑戦。実装完了には至りませんでしたが、チーム開発の重要な経験となりました。',
    teamStructure: 'エンジニア2名でのチーム構成',
    technicalExperience: [
      'React Nativeを用いたクロスプラットフォーム開発',
      'Expoによる開発環境構築',
      'Express.jsでのバックエンド実装',
      'Firebaseとの連携'
    ],
    technologies: ['React Native', 'Expo', 'Express.js', 'Firebase']
  },
  {
    id: 6,
    categoryId: 'personal',
    title: 'Omega Strikers 攻略サイト',
    shortDescription: 'ゲーム攻略支援サイト',
    period: '2024年5月～現在',
    description: `ゲーム"Omega Strikers"のプレイヤーをサポートする攻略サイトを開発しました。

    開発の背景：
    - 公式のローカライズ不足によるプレイヤーの理解不足
    - 複雑なゲーム仕様の公開情報の不足
    - 既存の攻略情報の散在と不正確さ

    プロジェクトの成果：
    - 過去最高でSteamにおけるアクティブユーザーの約60%(月間約300人)が利用
    - コミュニティラジオへの出演依頼を受けるなど、評価を獲得
    - 海外の類似サイトとの差別化に成功

    開発プロセス：
    1. ユーザーニーズの分析と機能要件の定義
    2. モダンな技術スタックを用いたアーキテクチャ設計
    3. 段階的な機能実装とユーザーフィードバックの収集
    4. 継続的な機能改善`,
    teamStructure: `個人開発プロジェクトとして、以下の役割を担当しました。

    - 要件定義、スケジュール管理
    - UI/UX設計、実装
    - 情報収集、データ更新
    - ユーザーフィードバック対応`,
    technicalExperience: [
      'Next.jsを使用したモダンなWeb開発',
      'TypeScriptによる複雑な型定義とユーティリティ型の実装',
      'レスポンシブデザインでモバイル対応',
      'スクロール時のUI/UX最適化',
      'アニメーションとトランジションの実装'
    ],
    learnings: `本プロジェクトを通じて、以下のような技術的・非技術的な学びを得ました。

    技術面での成長：
    - モダンなフロントエンド開発手法の習得
    - ユーザビリティの最適化
    - CI/CDパイプラインの構築と運用

    プロジェクトマネジメント：
    - 要件定義からリリースまでの一連のプロセス管理
    - ユーザーフィードバックに基づく継続的な改善

    差別化戦略：
    - 使いやすさと情報の正確性を重視
    - 日本語ユーザー向けの最適化
    - 独自の計算機能による付加価値の提供

    今後の展望：
    - 新機能の継続的な追加と改善
    - パフォーマンスの更なる最適化
    - コミュニティフィードバックに基づく機能拡張
    - モバイルアプリへの拡張
    - 多言語対応
    - その他コミュニティ活性化に繋がる機能の追加
    `,
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Framer Motion'],
    features: [
      'キャラクターアビリティとアイテムの詳細な計算機能',
      'アビリティのランキング機能と比較ツール',
      '関連サイトへのリンク集',
      'アップデート情報のタイムライン表示',
      'モバイル対応のレスポンシブデザイン',
      'ダークモード対応'
    ],
    images: [
      {
        src: '/images/omega-analyzer/main.png',
        alt: 'Omega Strikers攻略サイトのメイン画面',
        description: 'キャラクター選択とステータス計算機能のメイン画面'
      }
    ]
  },
  {
    id: 7,
    categoryId: 'personal',
    title: '貸し借り管理アプリ',
    shortDescription: 'LINEライクな金銭管理アプリ',
    period: '2023年4月',
    description: `友人との金銭の貸し借りを効率的に管理するためのLINEライクなアプリを開発しました。

    開発の背景：
    従来、友人との金銭の貸し借りはLINEで管理していましたが、以下の課題がありました。
    - 履歴を遡って確認する手間
    - 金額を電卓で再計算する必要性
    - 複数人との貸し借りの把握が困難
    - 返却の正確性への不安

    これらの課題を解決するため、以下の特徴を持つアプリを開発することにしました。
    - 貸し借りの即時記録と自動計算
    - シンプルで使いやすいUI
    - リアルタイムでの残高確認
    - 複数ユーザー間での情報共有

    アプリの主な機能：
    - LINEライクなチャットインターフェース
    - 貸し借り金額の自動計算と履歴管理`,
    teamStructure: `個人開発プロジェクトとして、以下の役割を全て担当しました。
    - 要件定義とUI/UX設計
    - データベース設計
    - フロントエンド・バックエンド実装
    - ユーザーフィードバック収集と改善`,
    technicalExperience: [
      'Flutterによるクロスプラットフォーム開発',
      'Firebase Authenticationを用いた認証システムの実装',
      'Firestoreを使用したリアルタイムデータベースの設計と実装',
      'Riverpodによる状態管理とロジックの分離',
      'StreamBuilderを活用したリアルタイムデータ同期'
    ],
    learnings: ``,
    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore']
  },
  {
    id: 8,
    categoryId: 'personal',
    title: 'Discord/LINE Bot',
    shortDescription: '開発支援Bot',
    period: '2022年12月、2024年3月',
    description:
      'チーム開発をサポートするための機能を備えたBotを開発。Githubの更新通知、検索補助機能、ChatGPT APIを活用した会話機能を実装しました。',
    teamStructure: '個人開発',
    technicalExperience: [
      'Discord/LINE APIの活用',
      'Webhookによる自動通知機能の実装',
      'ChatGPT APIの統合',
      '検索機能の実装'
    ],
    technologies: ['Python', 'Discord API', 'LINE API', 'ChatGPT API']
  },
  {
    id: 9,
    categoryId: 'personal',
    title: 'ショートカットツール',
    shortDescription: 'カスタムショートカットとGUIランチャー',
    period: '2022年4月',
    description:
      '開発作業を効率化するためのオリジナルショートカットキーを制作。最終的にGUIベースのランチャー機能を実装し、より使いやすいツールへと発展させました。',
    teamStructure: '個人開発',
    technicalExperience: [
      'AutoHotKeyによる自動化スクリプト開発',
      'PythonとWPFを使用したGUI開発',
      'キーボードショートカットの実装'
    ],
    technologies: ['AutoHotKey', 'Python', 'WPF']
  },
  {
    id: 10,
    categoryId: 'team',
    title: '技育CAMP2025 ハッカソンVol.1',
    shortDescription: '即席チームで信号機の状態を表示する地図アプリの開発',
    period: '2025年3月',
    description: `初めての即席チームとしてのハッカソン参加。交差点制御情報と断面交通量計測地点位置情報から信号機の状態を地図上に表示するアプリを開発しました。努力賞を受賞しました。`,
    teamStructure:
      '運営が組んだランダムなエンジニア5人チーム。自身を除いたメンバーはハッカソン初参加。',
    technicalExperience: [
      'Flutterによるクロスプラットフォーム開発',
      'Pythonを用いたデータ分析と前処理',
      '機械学習手法の比較と選定',
      'Supabaseを用いたデータベース構築'
    ],
    learnings: `ハッカソン形式の限られた時間内での開発を通して、タスクの分担や期限に対してどのように取り組むかを実践的に学ぶことができました。

特にMVP（Minimum Viable Product）を作ることを意識し、段階的に機能を拡張していくための設計アプローチの重要性を理解しました。まず動くプロトタイプを作り、その後に機能を追加していく方法が、限られた時間内で成果を出すために効果的でした。

また、技術的な実装だけでなく、ユーザーインターフェースの見た目の重要性も強く認識しました。審査において、より上位の評価を得るためには、機能性だけでなく、洗練されたUIデザインも重要な要素であることを学びました。`,
    technologies: ['Flutter', 'Supabase', 'Python', 'OpenStreetMap'],
    images: [
      {
        src: 'images/geek2025-hackathon1/main.png',
        alt: '発表時に使用した信号機状態表示地図アプリのデモ映像',
        description: '発表時に使用したデモ映像'
      }
    ]
  },
  {
    id: 11,
    categoryId: 'team',
    title: '技育CAMP2025 ハッカソンVol.2',
    shortDescription: '手持ちの食材情報から賞味期限、レシピ、栄養を管理するアプリの開発',
    period: '2025年4月',
    description: `友人と2人チームでハッカソンに参加。新しい技術への挑戦とUIにこだわり、受賞を狙いました。しかし、機能面は食材保存までの実装に留まりました。
    Github Actionsを使用してTypeScriptをコンパイルし、lambdaにデプロイするCDパイプラインを構築しました。
    Dockerの運用に初挑戦し、共通の開発環境を構築しました。これにより、メンバー間の環境差を解消し、個人的には別端末でのPCでの開発が容易になりました。
    AWSの運用に初挑戦し、DynamoDBとLambda Function URLsを使用したサーバーレスアーキテクチャの構築をしました。無期限無料枠にこだわり、継続開発する土台を作りました。
    `,
    teamStructure: `インターンに一緒に参加していた友人と2人チーム。
    役割分担：
    - 自分：フロントエンド開発、要件定義、設計、UIデザイン、タスク管理
    - 友人：バックエンド開発`,
    technicalExperience: [
      'DynamoDBを使用したデータベース設計',
      'Lambda Function URLsを用いたAPIの実装',
      'Github Actionsを使用したCDパイプラインの構築'
    ],
    learnings: `
    DockerやAWSを実際に使い、これらの実用性を実感し、苦手意識を克服することができました。
    指示の解釈を相手に任せるのではなく、相手に伝わるように説明することの重要性を学びました。;
    `,
    technologies: ['Next.js', 'TypeScript', 'lambda', 'dynamodb', 'Docker'],
    images: [
      {
        src: 'images/geek2025-hackathon2/meals.gif',
        alt: '食事記録画面',
        description: '食事記録画面'
      },
      {
        src: 'images/geek2025-hackathon2/dashboard.png',
        alt: '食事管理アプリのメイン画面',
        description: 'メイン画面'
      }
    ],
    xPosts: [
      {
        url: 'https://twitter.com/geek_pjt/status/1908797993136120162',
        description: '技育プロジェクト'
      }
    ]
  },
  {
    id: 3,
    categoryId: 'team',
    title: '英単語暗記アプリ',
    shortDescription: 'チームでのモバイルアプリ開発',
    period: '2024年3月～開発中断',
    description: `大学受験で既存の英単語アプリにお世話になり、その感謝が強く残っていたのと同時に、より良いものを作りたいという思いから、友人と共同で英単語暗記アプリの開発を開始しました。

    開発の背景：
    - 既存アプリの課題(カスタマイズ性の低さ、学習履歴の可視化不足)への対応
    - より効率的な操作の実現(辞書ライブラリによる単語入力予測、AIによる予測)

    プロジェクトの特徴：
    - MVVMアーキテクチャの採用による保守性の高い設計
    - Firebaseを活用したリアルタイムデータ同期`,
    teamStructure: `2人チームでの開発プロジェクト：

    役割分担：
    - 自分：モデル・ビューモデルの設計と実装、フロントエンド開発
    - 友人：フロントエンド開発

    開発プロセス：
    - 週次オンラインミーティングでの進捗確認
    - Discordを使用したタスク管理`,
    technicalExperience: [
      'MVVMアーキテクチャを用いたアプリケーション設計',
      'Firebaseを活用したユーザー認証とデータベース構築',
      'チーム開発におけるGitブランチ戦略の設計と運用',
      'Flutterのアニメーション機能を活用したインタラクティブなUI実装',
      'Riverpodを用いた状態管理の実装'
    ],
    learnings: ``,
    technologies: ['Flutter', 'Firebase', 'Cloud Firestore']
  }
]
