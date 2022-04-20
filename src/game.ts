import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script3 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15, 2, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883503437042236, 4.795694828033447, 1.0005861520767212)
})
nftPictureFrame2.addComponentOrReplace(transform3)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8.5, 13, 15.5),
  rotation: new Quaternion(3.0981581063376906e-15, 0, 1.088531040241566e-15, -1),
  scale: new Vector3(9.94230842590332, 10.597467422485352, 1.1141860485076904)
})
plainText.addComponentOrReplace(transform4)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15, 2, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005863904953003)
})
nftPictureFrame9.addComponentOrReplace(transform5)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(11.513779640197754, 2, 0.5000002980232239),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883506774902344, 4.795694828033447, 1.0005881786346436)
})
nftPictureFrame10.addComponentOrReplace(transform6)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 3.038335084915161),
  rotation: new Quaternion(-7.652456693289116e-16, -0.6958175301551819, 8.29479205322059e-8, -0.7182188034057617),
  scale: new Vector3(4.883510589599609, 4.795694828033447, 1.0005884170532227)
})
nftPictureFrame.addComponentOrReplace(transform7)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883516788482666, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame3.addComponentOrReplace(transform8)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.49720463156700134, 2, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883516788482666, 4.795694828033447, 1.00058913230896)
})
nftPictureFrame5.addComponentOrReplace(transform9)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15, 6, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883505821228027, 4.795694828033447, 1.0005863904953003)
})
nftPictureFrame13.addComponentOrReplace(transform10)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15, 6, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883513927459717, 4.795694828033447, 1.0005866289138794)
})
nftPictureFrame14.addComponentOrReplace(transform11)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(11.513779640197754, 6, 0.5000000596046448),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883509159088135, 4.795694828033447, 1.0005887746810913)
})
nftPictureFrame15.addComponentOrReplace(transform12)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(7.683259010314941, 6, 0.5),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8834991455078125, 4.795694828033447, 1.0005862712860107)
})
nftPictureFrame16.addComponentOrReplace(transform13)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(3.5357394218444824, 6, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883512496948242, 4.795694828033447, 1.0005896091461182)
})
nftPictureFrame17.addComponentOrReplace(transform14)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.4972047805786133, 6, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883512020111084, 4.795694828033447, 1.0005886554718018)
})
nftPictureFrame18.addComponentOrReplace(transform15)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(0.4972047805786133, 6, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883518218994141, 4.795694828033447, 1.00058913230896)
})
nftPictureFrame19.addComponentOrReplace(transform16)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(0.4972047805786133, 6, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883518218994141, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame20.addComponentOrReplace(transform17)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(15, 10.5, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883508205413818, 4.795694828033447, 1.0005866289138794)
})
nftPictureFrame21.addComponentOrReplace(transform18)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15, 10.5, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883516311645508, 4.795694828033447, 1.0005868673324585)
})
nftPictureFrame22.addComponentOrReplace(transform19)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(11.513779640197754, 10.5, 0.5000000596046448),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883511543273926, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame23.addComponentOrReplace(transform20)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.683259010314941, 10.5, 0.5),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883499622344971, 4.795694828033447, 1.0005863904953003)
})
nftPictureFrame24.addComponentOrReplace(transform21)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(3.5357394218444824, 10.5, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.8835129737854, 4.795694828033447, 1.0005897283554077)
})
nftPictureFrame25.addComponentOrReplace(transform22)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(0.4972047805786133, 10.5, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883513450622559, 4.795694828033447, 1.0005888938903809)
})
nftPictureFrame26.addComponentOrReplace(transform23)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(0.4972047805786133, 10.5, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883519649505615, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame27.addComponentOrReplace(transform24)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(0.4972047805786133, 10.5, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883519649505615, 4.795694828033447, 1.0005896091461182)
})
nftPictureFrame28.addComponentOrReplace(transform25)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(15, 16, 10.176342964172363),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883515357971191, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame29.addComponentOrReplace(transform26)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(15, 16, 6.657499313354492),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883521556854248, 4.795694828033447, 1.0005873441696167)
})
nftPictureFrame30.addComponentOrReplace(transform27)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(11.513779640197754, 16, 0.5000000596046448),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883517742156982, 4.795694828033447, 1.0005909204483032)
})
nftPictureFrame31.addComponentOrReplace(transform28)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(7.683259010314941, 16, 0.5),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.883504867553711, 4.795694828033447, 1.0005877017974854)
})
nftPictureFrame32.addComponentOrReplace(transform29)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(3.5357394218444824, 16, 0.5000009536743164),
  rotation: new Quaternion(-6.650727789537158e-15, 0.003565136343240738, -4.2499148644736806e-10, -0.9999936819076538),
  scale: new Vector3(4.88352108001709, 4.795694828033447, 1.00059175491333)
})
nftPictureFrame33.addComponentOrReplace(transform30)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 3.038334846496582),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883523464202881, 4.795694828033447, 1.000589370727539)
})
nftPictureFrame34.addComponentOrReplace(transform31)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 6.675734519958496),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883525371551514, 4.795694828033447, 1.0005898475646973)
})
nftPictureFrame35.addComponentOrReplace(transform32)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 10.198812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883525371551514, 4.795694828033447, 1.0005900859832764)
})
nftPictureFrame36.addComponentOrReplace(transform33)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0.4972047805786133, 6, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.883519649505615, 4.795694828033447, 1.0005896091461182)
})
nftPictureFrame4.addComponentOrReplace(transform34)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(15, 10.5, 13.750449180603027),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883509159088135, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame6.addComponentOrReplace(transform35)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(0.4972047805786133, 16, 13.698812484741211),
  rotation: new Quaternion(-7.652455634497932e-16, -0.6958174705505371, 8.294791342677854e-8, -0.7182187438011169),
  scale: new Vector3(4.88352632522583, 4.795694828033447, 1.0005903244018555)
})
nftPictureFrame7.addComponentOrReplace(transform36)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(15, 6, 3.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883508205413818, 4.795694828033447, 1.0005868673324585)
})
nftPictureFrame37.addComponentOrReplace(transform37)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(15, 10.5, 3.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883509635925293, 4.795694828033447, 1.0005871057510376)
})
nftPictureFrame38.addComponentOrReplace(transform38)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(15, 16, 3.5),
  rotation: new Quaternion(-1.1591285894172517e-14, 0.7191025018692017, -8.572369125658952e-8, -0.694904088973999),
  scale: new Vector3(4.883514881134033, 4.795694828033447, 1.0005875825881958)
})
nftPictureFrame39.addComponentOrReplace(transform39)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(15, 2.238152503967285, 2.963348865509033),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000033378601074, 2, 1.0000016689300537)
})
imageFromURL.addComponentOrReplace(transform40)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(7.610028266906738, 2.238152503967285, 0.46334901452064514),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL2.addComponentOrReplace(transform41)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(3.37274169921875, 2.238152503967285, 0.46334952116012573),
  rotation: new Quaternion(-2.464260247952727e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(2.000004291534424, 2, 1.000002145767212)
})
imageFromURL3.addComponentOrReplace(transform42)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(nftPictureFrame2, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(plainText, {"text":"PARDEY","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText, channelBus))
script1.spawn(nftPictureFrame9, {"id":"92327624419284968026561196978443474505882688196369155762059720134056438923265","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script1.spawn(nftPictureFrame10, {"id":"111159128381372626910652031113492135664716420447363763558681550822352569237505","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script1.spawn(nftPictureFrame, {"id":"38950671697601544062108757284002515516414969820193633712897104440008057552897","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script1.spawn(nftPictureFrame3, {"id":"31815638195728779984768712466496232472651897566989993371973986550817635696641","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script1.spawn(nftPictureFrame5, {"id":"63927620542847522519375790575566528254792799608562331787916036438773882421249","contract":"0x2953399124f0cbb46d2cbacd8a89cf0599974963","style":"Canvas","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script1.spawn(nftPictureFrame13, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script1.spawn(nftPictureFrame14, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script1.spawn(nftPictureFrame15, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script1.spawn(nftPictureFrame16, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script1.spawn(nftPictureFrame17, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script1.spawn(nftPictureFrame18, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script1.spawn(nftPictureFrame19, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script1.spawn(nftPictureFrame20, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script1.spawn(nftPictureFrame21, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script1.spawn(nftPictureFrame22, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script1.spawn(nftPictureFrame23, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script1.spawn(nftPictureFrame24, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script1.spawn(nftPictureFrame25, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script1.spawn(nftPictureFrame26, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script1.spawn(nftPictureFrame27, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script1.spawn(nftPictureFrame28, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script1.spawn(nftPictureFrame29, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script1.spawn(nftPictureFrame30, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script1.spawn(nftPictureFrame31, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script1.spawn(nftPictureFrame32, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script1.spawn(nftPictureFrame33, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script1.spawn(nftPictureFrame34, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script1.spawn(nftPictureFrame35, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script1.spawn(nftPictureFrame36, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script1.spawn(nftPictureFrame4, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script1.spawn(nftPictureFrame6, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script1.spawn(nftPictureFrame7, {"id":"63460984615845189597705560094056282629448010796892788701527535441722323501057","contract":"0x495f947276749ce646f68ac8c248420045cb7b5e","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script1.spawn(nftPictureFrame37, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script1.spawn(nftPictureFrame38, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script1.spawn(nftPictureFrame39, {"id":"155","contract":"0xba6e421833f6c190a830ce6e142685b3916c9bd0","style":"Blocky","color":"#000000","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script3.spawn(imageFromURL, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script3.spawn(imageFromURL2, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script3.spawn(imageFromURL3, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageFromURL3, channelBus))