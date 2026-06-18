/* ═══════════════════════════════════════════════════════════════
   MVZ Prompts — Arquivo de dados
   ✏️  Para adicionar ou editar prompts, altere este arquivo.
   📦  Salve e recarregue o index.html — as mudanças aparecem
       automaticamente na biblioteca.
   ═══════════════════════════════════════════════════════════════ */

const PROMPTS_DATA = {
  "meta": {
    "title": "MVZ Prompts",
    "description": "Biblioteca de Prompts para Influencer IA",
    "version": "1.0.0",
    "updated": "2026-06-08"
  },
  "categories": [
    { "id": "influencer", "label": "Influencer", "icon": "👤", "description": "Criação de rosto e corpo da influencer IA" },
    { "id": "animacao",   "label": "Animação",   "icon": "🎬", "description": "Animações realistas de movimento" },
    { "id": "gancho",     "label": "Ganchos",    "icon": "🪝", "description": "Ganchos de abertura para vídeos" },
    { "id": "troca-roupa","label": "Troca de Roupa","icon": "👗", "description": "Troca de outfit com identidade preservada" },
    { "id": "cenario",    "label": "Cenário",    "icon": "🏠", "description": "Troca de ambiente e localização" },
    { "id": "cta",        "label": "CTA",        "icon": "📣", "description": "Call to action e gestos de engajamento" },
    { "id": "unboxing",   "label": "Unboxing",   "icon": "📦", "description": "Vídeos de abertura e reação a produtos" },
    { "id": "cabelo",     "label": "Cabelo",     "icon": "💇", "description": "Animação focada em movimento de cabelo" }
  ],
  "prompts": [
    {
      "id": 1,
      "title": "Criando o Rosto da Influencer",
      "category": "influencer",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Gera o rosto ultrarrealista da influencer a partir de duas imagens de referência.",
      "body": "Crie uma imagem ultrarrealista de uma influenciadora digital brasileira de IA, usando duas imagens de referência enviadas pelo usuário.\n\nUse a Imagem 1 como referência principal do rosto. Analise cuidadosamente formato facial, proporções, tom de pele, textura da pele, sobrancelhas, olhos, nariz, boca, queixo, expressão, cabelo visível, ângulo facial e identidade visual geral.\n\nUse a Imagem 2 apenas como apoio para coerência corporal, tom geral, estilo e presença visual, sem perder o foco principal no rosto.\n\nCrie uma foto de rosto estilo retrato 3x4 profissional, com a influenciadora olhando diretamente para a câmera, rosto mais próximo da câmera, enquadramento do topo da cabeça até a parte superior dos ombros. A imagem deve priorizar máximo detalhamento facial, naturalidade e realismo.\n\nA influenciadora deve parecer uma pessoa real, brasileira, com aparência humana autêntica, sem estética artificial. A pele deve ter poros visíveis, textura natural, pequenas variações de tom, leves imperfeições humanas, expressão confiante, simpática e espontânea.\n\nAMBIENTE:\nCenário natural, simples e realista, com fundo neutro ou quarto brasileiro discreto levemente desfocado. Nada artificial, nada futurista, nada com aparência de estúdio falso.\n\nILUMINAÇÃO:\nLuz natural suave, realista, vindo de uma janela, com sombras delicadas no rosto, brilho natural nos olhos e alta definição nos detalhes faciais.\n\nREGRAS OBRIGATÓRIAS:\n– Criar uma influenciadora digital brasileira de IA\n– Usar a Imagem 1 como referência principal do rosto\n– Usar a Imagem 2 como apoio de coerência visual\n– Foto de rosto próxima da câmera\n– Estilo retrato 3x4 realista\n– Olhando diretamente para a câmera\n– Alta nitidez no rosto e nos olhos\n– Aparência natural, humana e brasileira\n– Olhos somente castanhos ou pretos\n– Proibido olhos azuis, verdes ou cinzas\n– Não adicionar texto, logo ou marca d'água\n\nINSTRUÇÕES NEGATIVAS:\nNão criar rosto genérico de IA. Não criar pele plástica. Não suavizar demais a pele. Não criar aparência de boneca. Não criar estética 3D, CGI, anime, cartoon ou ilustração. Não distorcer olhos, boca, nariz, rosto ou cabelo. Não criar fundo artificial. Não usar filtros exagerados.\n\nRESULTADO FINAL:\nUma foto de rosto ultrarrealista, estilo 3x4 profissional, de uma influenciadora digital brasileira de IA, com forte semelhança ao rosto da Imagem 1, olhando para a câmera, em cenário natural e com qualidade fotográfica premium."
    },
    {
      "id": 2,
      "title": "Criando o Corpo da Influencer",
      "category": "influencer",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Gera o corpo inteiro 9:16 combinando rosto de uma referência e corpo de outra.",
      "body": "Crie uma fotografia ultrarrealista vertical 9:16 de uma influenciadora digital brasileira de IA em corpo inteiro, dos pés à cabeça, usando duas imagens de referência enviadas pelo usuário.\n\nA Imagem 1 é a referência principal e obrigatória do rosto da influenciadora. Analise e preserve com máxima fidelidade o rosto da Imagem 1: formato facial, identidade visual, proporções, tom de pele, textura da pele, olhos, sobrancelhas, nariz, boca, queixo, cabelo, expressão, idade aparente e aparência geral. Não altere o rosto principal. Não recrie outro rosto. Não suavize demais. Não deixe genérico.\n\nA Imagem 2 é a referência principal do corpo, pose e proporções físicas. Analise o tipo corporal, altura aparente, silhueta, postura, ombros, cintura, quadril, braços, pernas, mãos, pés, posição do corpo, roupa e linguagem corporal.\n\nCENÁRIO OBRIGATÓRIO:\nQuarto fechado, simples, natural e realista, com aparência brasileira. Fundo limpo e discreto, parede neutra, cama simples, cortina, guarda-roupa ou poucos elementos reais de quarto. Não usar varanda, sala aberta, janela panorâmica, vista de cidade, fundo externo ou ambiente luxuoso artificial.\n\nREGRAS OBRIGATÓRIAS:\n– Usar Imagem 1 como rosto definitivo\n– Usar Imagem 2 como corpo, pose e proporção de referência\n– Corpo inteiro dos pés à cabeça\n– Formato vertical 9:16\n– Influenciadora brasileira de IA\n– Em pé, olhando para a câmera\n– Quarto fechado, simples e realista\n– Olhos somente castanhos ou pretos\n– Sem texto, logo ou marca d'água\n\nINSTRUÇÕES NEGATIVAS:\nNão trocar o rosto da Imagem 1. Não modificar a identidade facial. Não criar corpo aleatório ignorando a Imagem 2. Não criar aparência de montagem. Não cortar cabeça ou pés. Não deformar mãos, dedos, pernas, braços, pés, rosto ou cabelo. Não criar cenário aberto. Não usar fundo externo. Não criar pele plástica.\n\nRESULTADO FINAL:\nUma fotografia vertical 9:16 ultrarrealista e profissional de uma influenciadora digital brasileira de IA em corpo inteiro, dentro de um quarto fechado simples e natural, olhando para a câmera, com qualidade premium e aparência indistinguível de uma fotografia real."
    },
    {
      "id": 3,
      "title": "Gancho 1 — Apresentação POV Natural",
      "category": "gancho",
      "tags": ["Flow", "Freepik", "Grok"],
      "description": "Animação POV onde a influencer se aproxima da câmera e toca delicadamente um detalhe da roupa.",
      "body": "Animate the subject as a REAL person presenting clothing in a POV-style video.\n\n🔥 START OF ANIMATION (UPDATED):\n– The subject starts at a natural distance from the camera\n– She calmly takes two small, natural steps forward toward the camera\n– While approaching, she gently touches and lightly holds the bow/lace detail on the chest area\n– The gesture is delicate, subtle and realistic, like naturally showing a clothing detail\n– No emphasis, no posing, no exaggeration\n– The movement feels spontaneous and casual\n– After briefly touching the bow, she naturally releases it\n– She takes a small step back to her original position\n– Smooth transition into the rest of the animation\n\nGENERAL MOTION STYLE:\n– Natural, confident, fluid movements\n– Not static / Not exaggerated / Not robotic\n– Real human timing\n\nBODY MOVEMENTS:\n– One hand naturally rests on the waist\n– Gentle hip movement (side-to-side, very subtle)\n– One foot forward, the other relaxed behind\n– Natural posture, relaxed shoulders\n\nCLOTHING PRESENTATION:\n– Small, natural movements to highlight the outfit\n– Slight torso rotation to show fit and fabric\n– No aggressive posing / No fashion runway exaggeration\n– Movements feel spontaneous and casual\n\nFACIAL EXPRESSION (VERY IMPORTANT – REAL HUMAN TIMING):\n– The subject does NOT smile continuously\n– Facial expression alternates naturally throughout the video\n– While approaching: neutral, relaxed expression, lips softly closed\n– During the bow/lace touch: a brief, subtle smile appears\n– After releasing: expression returns to neutral\n– Later: she gently turns her head slightly to one side, a short warm smile appears\n\nPERSONALITY:\n– Sympathetic / Approachable / Comfortable\n– Feels like a real person casually recording a video\n\nCAMERA & POV:\n– POV perspective, as if the phone is held by a person\n– Very subtle handheld micro-movements\n– No camera shake / No zoom\n– Camera remains at chest/face height\n\nREALISM RULES:\n– Preserve original facial identity\n– Preserve skin texture\n– Preserve hair movement (slight natural motion)\n– Natural fabric physics\n– No beauty filters / No smoothing / No stylization\n\nRESTRICTIONS:\n– No talking / No text / No UI / No effects\n– No exaggerated dance / No influencer posing clichés\n\nFINAL RESULT:\nA hyper-realistic POV fashion video where the subject feels alive and human, with natural facial expression changes, occasional soft smiles, neutral moments in between, and subtle head turns — indistinguishable from a real casual phone recording."
    },
    {
      "id": 4,
      "title": "Gancho Jogar Roupa 1 — Cobrindo a Lente",
      "category": "gancho",
      "tags": ["Flow", "Freepik", "Grok"],
      "description": "A influencer caminha em direção à câmera e cobre a lente com a peça de roupa para criar uma transição orgânica.",
      "body": "Animate the subject as a REAL person presenting clothing in a POV-style fashion video.\n\n🔥 START OF ANIMATION (HOOK TRANSITION VERSION):\n– The subject starts standing naturally at a comfortable distance from the camera\n– She is already holding the clothing/product naturally with both hands in front of the body\n– Neutral relaxed posture / Soft natural facial expression\n– She calmly takes two small natural steps forward toward the camera\n– The clothing naturally moves together with her body\n– Arms remain relaxed and realistic\n– Natural fabric movement and gravity behavior\n\n🔥 MAIN HOOK ACTION (CRITICAL):\n– As she gets closer to the camera:\n  • she smoothly raises the clothing/product forward toward the lens\n  • the clothing gradually occupies more of the frame\n  • movement feels natural and continuous\n  • no aggressive motion / no throwing action\n– The clothing must FULLY cover the camera lens naturally\n– The transition happens by the clothing physically reaching the camera\n– The fabric fills the entire frame progressively\n\nIMPORTANT:\n– The subject does NOT toss the clothing\n– The subject does NOT shake the clothing aggressively\n– The movement is smooth, controlled and realistic\n– The clothing behaves with natural fabric physics while moving forward\n– During the forward movement: a subtle soft smile appears briefly\n\nPRODUCT/FABRIC REALISM:\n– Realistic fabric weight / Natural hanging behavior\n– Subtle wrinkles and folds\n– Slight fabric compression from fingers\n– Natural gravity pull / No stiff fabric / No floating product\n\nCAMERA & POV:\n– POV-style camera\n– Very subtle handheld micro movement only\n– No zoom / No camera shake\n– Camera remains fixed in position\n– Real smartphone recording feeling\n\nRESTRICTIONS:\n– No talking / No text / No UI / No effects\n– Transition must happen ONLY through the clothing covering the lens\n\nFINAL RESULT:\nA hyper-realistic POV-style fashion video where the subject naturally walks toward the camera holding a clothing product, then smoothly brings the fabric directly into the lens until it fully covers the frame, creating a realistic organic transition identical to a real influencer clothing hook video filmed on a smartphone."
    },
    {
      "id": 5,
      "title": "Gancho Jogar Roupa 2 — Movimento Suave",
      "category": "gancho",
      "tags": ["Flow", "Freepik", "Grok"],
      "description": "Versão corrigida do gancho de roupa, com foco em movimento calmo e boca fechada.",
      "body": "The subject must move naturally and calmly.\n\nDo NOT rush aggressively toward the camera.\nDo NOT run. Do NOT lunge forward.\nDo NOT create chaotic movement.\nDo NOT create exaggerated fast motion.\n\nThe hook should feel smooth and controlled like a real casual influencer recording.\n\nCORRECT MOVEMENT FLOW:\n– The subject starts already holding the clothing/product naturally\n– She takes ONE natural small step forward\n– While stepping forward, she smoothly raises the clothing toward the camera\n– The movement is fluid and continuous\n– Calm natural pacing / No sudden acceleration\nThe clothing should reach the camera naturally within around 1–2 seconds.\n\nIMPORTANT:\n– The subject body movement stays relaxed\n– Natural shoulder movement / Natural arm motion\n– Natural posture balance\n– No exaggerated hip movement / No dramatic motion\n\nFACIAL BEHAVIOR FIX (VERY IMPORTANT):\n– Mouth must remain naturally closed most of the time\n– Do NOT generate talking behavior\n– Do NOT simulate speech / Do NOT create lip-sync motion\n– No random mouth opening / No exaggerated facial animation\n\nExpression should remain:\n• soft / neutral / relaxed / natural\n\nA very subtle smile is allowed briefly, but:\n– lips mostly closed\n– no visible talking motion\n– no exaggerated grin\n\nMOTION QUALITY:\n– Real-time natural motion\n– No slow motion / No delay / No laggy movement\n– No robotic timing / No jitter / No frame skipping / No looping behavior\n\nCAMERA:\n– Stable POV camera\n– Very subtle handheld micro movement only\n– No zoom / No cinematic motion / No shake\n\nFINAL FEELING:\nThe animation should feel like a real girl casually stepping forward and softly placing the clothing in front of the phone camera for a natural TikTok-style transition."
    },
    {
      "id": 6,
      "title": "Animação Corpo Inteiro — Movimento Fluido",
      "category": "animacao",
      "tags": ["Flow", "Freepik"],
      "description": "Anima uma imagem estática com movimento corporal completo e naturalidade.",
      "body": "Animate this image as a hyper-realistic full-body video of a real human being.\n\nBODY ANIMATION:\n– Natural, fluid full-body movement\n– Subtle weight shifting from foot to foot\n– Gentle sway in the torso\n– Arms moving slightly with body rhythm\n– Natural breathing visible in chest and shoulders\n– Realistic balance and center of gravity\n– No robotic or mechanical movement / No loop artifacts\n\nCLOTHING ANIMATION:\n– Fabric moves naturally with body\n– Realistic physics: weight, drape, wrinkle formation\n– Slight fabric compression and release with movement\n– Natural gravity pull on all clothing elements\n– Hair moves with subtle natural sway\n\nFACIAL ANIMATION:\n– Eyes blink naturally (every 3–5 seconds)\n– Subtle eye movement (not fixed stare)\n– Micro expressions: slight eyebrow movement\n– Natural skin movement with facial muscles\n– Lips relaxed, closed, no talking\n\nSKIN & TEXTURE:\n– Preserve original skin texture and pores\n– No smoothing, no beautification filters\n– Realistic skin tone consistency\n– Natural lighting response with movement\n\nQUALITY RULES:\n– Hyper-realistic output\n– No cartoon / No CGI look\n– No face distortion\n– No body proportion changes\n– Preserve original identity 100%"
    },
    {
      "id": 7,
      "title": "Animação Cabelo — Movimento Natural",
      "category": "cabelo",
      "tags": ["Flow", "Kling"],
      "description": "Foca a animação no comportamento hiper-realista do cabelo com física de fios individuais.",
      "body": "Animate this image focusing on ultra-realistic hair movement.\n\nHAIR ANIMATION (PRIMARY FOCUS):\n– Natural hair movement with subtle air/breeze simulation\n– Individual strand behavior (not block movement)\n– Realistic hair physics: weight, bounce, elasticity\n– Slight delay in hair movement after body motion stops\n– Natural layering: outer strands move more than inner\n– Hair falls naturally with gravity\n– No stiff or plastic-looking hair\n– No hair clipping through body or clothing\n\nHAIR TYPES HANDLING:\n– Long straight: gentle waves and slight lift at tips\n– Curly/wavy: spring-like bounce with each movement\n– Short hair: subtle movement with slight drift\n– Bangs/fringe: light flutter with natural fall-back\n\nSUPPORTING BODY MOVEMENT:\n– Subtle head turns to trigger hair motion\n– Gentle nodding or tilting\n– Natural posture shifts\n\nREALISM REQUIREMENTS:\n– Preserve hair color, highlights and texture exactly\n– No hair color changes / No sudden hair shape changes\n– Smooth continuous motion / No looping artifacts\n– No hair merging or melting\n\nFINAL RESULT:\nHair movement that is indistinguishable from a real video, with each strand responding naturally to physics, gravity and subtle body movement."
    },
    {
      "id": 8,
      "title": "OOTD Espelho — Apresentação de Roupa",
      "category": "animacao",
      "tags": ["Flow", "Freepik"],
      "description": "Vídeo de selfie no espelho estilo OOTD com rotação para mostrar o outfit completo.",
      "body": "Animate this image as a hyper-realistic OOTD mirror selfie video.\n\nSCENE SETUP:\n– The subject is standing in front of a mirror\n– She holds the phone naturally to film herself in the mirror\n– POV-style: camera is the phone she is holding\n– The reflection in the mirror is her full body\n– Room background: simple, natural, realistic bedroom or bathroom\n\nANIMATION FLOW:\n– She starts in a natural standing pose looking at her reflection\n– Slowly rotates her body 90 degrees to one side to show the outfit silhouette\n– Pauses briefly showing the side profile\n– Smoothly rotates back to face the mirror\n– Slight lean forward to look at a clothing detail\n– Returns to neutral standing pose\n– Subtle weight shift throughout\n\nCLOTHING SHOWCASE:\n– Movements designed to naturally show the full outfit\n– Fabric drape and fit visible during rotation\n– Natural clothing physics during movement\n– No aggressive posing / No fashion runway behavior\n\nMIRROR REFLECTION REALISM:\n– The reflection must move in perfect sync with the subject\n– Correct mirror physics (reversed image)\n– Natural lighting on both subject and reflection\n– Subtle depth of field: subject sharper than background\n– Realistic mirror surface (no distortion)\n\nFINAL RESULT:\nA hyper-realistic OOTD mirror selfie video that looks exactly like a real girl filming herself trying on an outfit, indistinguishable from a genuine TikTok/Reels mirror video."
    },
    {
      "id": 9,
      "title": "Espelho — Giro 360° de Roupa",
      "category": "animacao",
      "tags": ["Flow", "Kling"],
      "description": "Rotação completa 360° para mostrar o outfit de todos os ângulos.",
      "body": "Animate this image as a hyper-realistic 360 outfit turn mirror video.\n\nCORE ACTION:\n– The subject performs a slow, smooth 360-degree full body turn\n– Turn is continuous and natural, not mechanical\n– She starts facing the mirror/camera\n– Rotates to show left profile → back → right profile → returns to front\n– Total turn takes approximately 3–4 seconds\n– Movement is elegant and controlled\n\nDURING THE TURN:\n– Arms stay naturally at her sides or slightly extended\n– Clothing flows naturally during rotation\n– Hair moves with the turn following natural physics\n– Body weight shifts naturally with the rotation\n– Feet pivot naturally on the floor\n\nCLOTHING DURING TURN:\n– Full outfit visible from all angles\n– Fabric and drape shown realistically\n– Natural physics: skirts flare slightly, fabric moves with rotation\n– Fit and silhouette clearly visible from every angle\n\nFACIAL EXPRESSION:\n– Confident, natural expression throughout\n– Brief glance at the mirror as she passes the front\n– No exaggerated smiling\n– Natural eye movement\n\nFINAL RESULT:\nA smooth, realistic 360-degree outfit turn that showcases the complete clothing from every angle, identical to a real influencer trying on clothes in front of a mirror."
    },
    {
      "id": 10,
      "title": "CTA — Apontar para a Tela",
      "category": "cta",
      "tags": ["Flow", "Freepik"],
      "description": "Gesto de apontar direto para a câmera como call to action de engajamento.",
      "body": "Animate this image with a hyper-realistic CTA pointing gesture for a fashion/product video.\n\nCTA ACTION:\n– The subject raises one arm naturally toward the camera\n– She points her finger directly at the camera/viewer\n– The gesture is confident but friendly, not aggressive\n– Arm raises smoothly from a resting position\n– Finger points at camera for 1–2 seconds\n– Arm naturally lowers back after the gesture\n\nGESTURE DETAILS:\n– The pointing arm moves with natural muscle physics\n– Slight shoulder raise as arm extends\n– Natural elbow bend during the motion\n– Finger clearly extended pointing forward\n– Rest of hand relaxed (not stiff)\n– Other arm remains naturally at side or on waist\n\nFACIAL EXPRESSION DURING CTA:\n– Direct eye contact with camera as she points\n– Confident, warm smile appears during the gesture\n– Eyebrows slightly raised (engaging expression)\n– Expression returns to neutral after gesture completes\n– No exaggerated acting\n\nBODY LANGUAGE:\n– Slight forward lean toward camera during pointing\n– Confident posture\n– Natural weight shift\n– Movement feels spontaneous and engaging\n\nFINAL RESULT:\nA natural, engaging CTA pointing gesture that looks like a real influencer directing their audience to click/shop/follow, indistinguishable from a real video recording."
    },
    {
      "id": 11,
      "title": "CTA — Gesto de Swipe Up",
      "category": "cta",
      "tags": ["Flow", "Freepik"],
      "description": "Animação do gesto de swipe up para redirecionar audiência em Stories e Reels.",
      "body": "Animate this image with a hyper-realistic swipe-up gesture CTA for social media.\n\nSWIPE UP ACTION:\n– The subject raises one hand toward the bottom of the frame\n– Makes a natural upward swiping gesture with her finger or full hand\n– Gesture mimics the classic swipe up to shop social media action\n– Motion is smooth, fluid, and natural\n– Gesture repeats once or twice naturally\n– Hand returns to natural position after\n\nHAND AND ARM DETAILS:\n– Natural hand anatomy (realistic fingers, no distortion)\n– Arm movement follows natural shoulder and elbow mechanics\n– Wrist rotates slightly during the upward swipe\n– Fingers relaxed but purposeful during gesture\n– Speed: moderate, not too fast, not too slow\n\nFACIAL EXPRESSION:\n– Engaging, warm smile during the gesture\n– Eye contact with camera maintained\n– Slightly raised eyebrows (inviting expression)\n– Expression is friendly and persuasive\n\nSUPPORTING BODY:\n– Slight forward body lean during gesture\n– Other hand naturally on waist or at side\n– Confident posture throughout\n\nFINAL RESULT:\nA realistic, engaging swipe-up CTA gesture that looks exactly like a real influencer directing their audience to interact with content on Instagram Stories, TikTok or Reels."
    },
    {
      "id": 12,
      "title": "Troca de Roupa — Mesmo Cenário",
      "category": "troca-roupa",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Recria a mesma pessoa com uma roupa diferente mantendo o mesmo cenário e identidade.",
      "body": "Using the reference image provided, recreate the same person wearing the new clothing/outfit described below.\n\nIDENTITY PRESERVATION (MANDATORY):\n– Preserve 100% facial identity from the reference image\n– Same face: structure, proportions, skin tone, features, expression style\n– Same body type and proportions\n– Same hair: color, length, texture, style\n– No face changes / No identity swap\n\nNEW CLOTHING:\n[DESCREVA A ROUPA AQUI]\n– Realistic fabric rendering\n– Natural clothing drape and fit\n– Correct clothing physics for the body type\n– Realistic wrinkles and folds\n\nSCENE:\n– Same background/environment as reference image\n– Same lighting direction and quality\n– Same camera angle and framing\n– Seamless integration — no visible compositing\n\nPOSE:\n– Same or very similar pose to reference image\n– Natural standing or requested pose\n– Body proportions unchanged\n\nQUALITY:\n– Ultra-realistic DSLR photo quality\n– High resolution\n– Sharp face and clothing details\n– No visible AI artifacts\n– No smoothing filters\n\nOUTPUT:\nA photorealistic image of the same person from the reference image, now wearing the new outfit, in the same scene, with identical identity and quality indistinguishable from a real photograph."
    },
    {
      "id": 13,
      "title": "Troca de Roupa — Múltiplos Looks",
      "category": "troca-roupa",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Gera múltiplas variações de outfit da mesma pessoa com consistência de identidade.",
      "body": "Using the reference image, create [NUMBER] variations of the same person wearing different outfits.\n\nIDENTITY PRESERVATION (MANDATORY FOR ALL VARIATIONS):\n– Preserve 100% facial identity across ALL variations\n– Same face, body, hair in every single image\n– No identity drift between variations\n– All images must look like the same real person\n\nVARIATIONS REQUESTED:\nVariation 1: [DESCREVA O LOOK 1]\nVariation 2: [DESCREVA O LOOK 2]\nVariation 3: [DESCREVA O LOOK 3]\n\nCONSISTENCY RULES:\n– Same lighting quality across all variations\n– Same or similar background\n– Same framing and camera angle\n– Consistent skin tone / Consistent hair appearance\n\nCLOTHING REALISM FOR EACH VARIATION:\n– Realistic fabric for each clothing type\n– Natural fit and drape for each outfit\n– Proper clothing physics / Realistic shadows and highlights\n\nOUTPUT FORMAT:\n[NUMBER] separate photorealistic images, each showing the same person in a different outfit, all with identical quality and identity preservation, forming a cohesive content set for social media."
    },
    {
      "id": 14,
      "title": "Troca de Cenário — Ambiente Fechado",
      "category": "cenario",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Coloca a mesma pessoa em um novo ambiente interno preservando roupa e identidade.",
      "body": "Using the reference image, place the same person in a new background/scene while preserving complete identity.\n\nNEW SCENE:\n[DESCREVA O NOVO AMBIENTE/CENÁRIO AQUI]\n\nIDENTITY PRESERVATION (MANDATORY):\n– Preserve 100% facial identity: face, features, skin tone, hair\n– Same body and proportions\n– Same clothing as in the reference image (preserve exactly)\n– Only the background changes\n\nSCENE INTEGRATION RULES:\n– Realistic lighting matching the new environment\n– Correct shadows on body and clothing from the new light source\n– Realistic ground shadows/feet placement\n– No floating subject / Natural perspective matching\n– No visible compositing edge\n\nENVIRONMENTAL REALISM:\n– High quality background rendering\n– Correct depth of field (subject in focus, background slightly softer)\n– Realistic ambient lighting\n– No background clipping or artifacts\n\nFINAL RESULT:\nA photorealistic image of the same person from the reference, placed naturally in the new scene, indistinguishable from a real photograph taken at that location."
    },
    {
      "id": 15,
      "title": "Troca de Cenário — Externo / Outdoor",
      "category": "cenario",
      "tags": ["ChatGPT", "Gemini"],
      "description": "Recria a influencer em ambiente externo com iluminação natural coerente.",
      "body": "Using the reference image, recreate the same person in an outdoor setting with full identity preservation.\n\nOUTDOOR SCENE:\n[DESCREVA O AMBIENTE EXTERNO: praia, parque, rua, cidade, campo, etc.]\n\nIDENTITY PRESERVATION (MANDATORY):\n– Preserve 100% facial identity\n– Same face, hair and body from reference\n– Same or described clothing\n– Natural outdoor skin tone response (no over-brightening)\n\nOUTDOOR LIGHTING:\n– Natural daylight/golden hour/overcast (specify preferred)\n– Realistic sun direction creating natural shadows\n– Correct highlight and shadow on face and body\n– Natural outdoor ambient color temperature\n– No artificial studio lighting look in outdoor scene\n\nENVIRONMENTAL INTEGRATION:\n– Natural ground (grass, sand, pavement, etc.) under feet\n– Realistic depth: foreground, subject, background layers\n– Natural color grading for outdoor setting\n– Wind effect on hair and light fabrics (if applicable)\n\nFINAL RESULT:\nA photorealistic outdoor portrait of the same person from the reference image, naturally placed in the described outdoor environment, with professional editorial quality indistinguishable from a real outdoor photo shoot."
    },
    {
      "id": 16,
      "title": "Unboxing POV — Abertura de Caixa",
      "category": "unboxing",
      "tags": ["Flow", "Freepik"],
      "description": "Vídeo POV de unboxing com física realista de embalagem, mãos e reação emocional.",
      "body": "Animate this image as a hyper-realistic unboxing video.\n\nUNBOXING ANIMATION:\n– The subject holds a package/box naturally in both hands\n– She carefully opens the box with natural finger movements\n– Realistic hand and finger physics throughout\n– The box opens smoothly revealing contents inside\n– She looks inside with natural curiosity expression\n– She may remove the tissue paper or filler material\n– She reaches in and carefully removes the main product\n– She holds the product up toward the camera to show it\n– Natural handling: product weight visible in arm/wrist movement\n\nHAND AND PRODUCT PHYSICS:\n– Realistic hand grip and finger positioning\n– Natural wrist movement when handling objects\n– Product weight behavior: heavier items affect arm position\n– Tissue paper or packaging material moves naturally (crinkle physics)\n– Box flaps open with realistic cardboard physics\n\nFACIAL EXPRESSION FLOW:\n– Beginning: neutral, slightly excited anticipation\n– During opening: focused, natural curiosity\n– On reveal: genuine surprise/happiness reaction\n– Showing product: confident, satisfied smile\n– Expressions are subtle and human, not theatrical\n\nCAMERA:\n– POV-style, slightly above product level\n– Very subtle handheld movement\n– No zoom (or very slow natural zoom toward product)\n\nFINAL RESULT:\nA hyper-realistic POV unboxing video that looks exactly like a real person authentically opening and reacting to a product for the first time, identical in feel to organic TikTok or Instagram Reels unboxing content."
    },
    {
      "id": 17,
      "title": "Unboxing — Reação ao Produto",
      "category": "unboxing",
      "tags": ["Flow", "Kling"],
      "description": "Foco na reação emocional autêntica ao receber/ver o produto pela primeira vez.",
      "body": "Animate this image as a hyper-realistic product reaction video focused on authentic emotional response.\n\nREACTION ANIMATION:\n– The subject is shown after opening/receiving a product\n– She holds the product visibly in her hands\n– She examines it with genuine interest and detail\n– She turns it, looks at it from different angles\n– Natural handling behavior throughout\n– She shows the product face-forward toward the camera\n\nAUTHENTIC EMOTIONAL JOURNEY:\nPhase 1 — First Look:\n– Eyes widen slightly / Lips part naturally\n– Slight inhale visible in chest\n– Genuine surprised/pleased expression\n\nPhase 2 — Examination:\n– Focused, curious expression while inspecting details\n– Head tilts naturally as she looks at different parts\n– Subtle nods of approval / Natural smile grows gradually\n\nPhase 3 — Show & Recommend:\n– Turns product to camera\n– Warm, confident, satisfied expression\n– Brief smile while displaying product\n– Natural eye contact with camera\n\nHANDS & PRODUCT:\n– Realistic hand movements during examination\n– Product handled with appropriate weight physics\n– Fingers trace product details naturally\n– Natural grip adjustments\n\nFINAL RESULT:\nAn authentic, emotionally compelling product reaction animation that captures genuine human response to receiving a product, perfect for influencer testimonial content."
    },
    {
      "id": 18,
      "title": "Animação Elasticidade — Tecido e Detalhe",
      "category": "animacao",
      "tags": ["Flow", "Freepik"],
      "description": "Animação com foco em demonstrar a elasticidade e textura do tecido da peça.",
      "body": "Animate this image focusing on fabric elasticity and clothing texture demonstration.\n\nFABRIC ELASTICITY DEMONSTRATION:\n– The subject gently stretches a clothing element (waistband, sleeve, fabric panel)\n– Fabric stretches realistically showing material properties\n– Natural elastic return when released\n– Realistic fabric memory and recovery behavior\n– Skin visible through stretch if fabric is thin\n\nTEXTURE SHOWCASE:\n– Slight touch and feel gesture on clothing surface\n– Natural fabric movement shows texture\n– Light reflects realistically off fabric surface\n– Woven or knit patterns visible in motion\n\nHAND AND FINGER PHYSICS:\n– Realistic grip with fabric compression\n– Natural finger indentations in fabric\n– Smooth controlled stretch motion\n– Natural release and return\n\nBODY SUPPORT MOVEMENT:\n– Subtle natural body sway\n– Hip and shoulder movement\n– Natural posture shifts\n\nREALISM REQUIREMENTS:\n– Preserve all fabric properties from original image\n– No CGI fabric look\n– No uniform plastic-like material\n– Realistic textile behavior throughout\n\nFINAL RESULT:\nA video that clearly and naturally demonstrates the fabric quality, elasticity and texture of the clothing, indistinguishable from a real product demonstration video."
    }
  ]
};
