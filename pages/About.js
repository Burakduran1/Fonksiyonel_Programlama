import {View,Text,StyleSheet, ScrollView}from 'react-native'
export default  function About()
{
   return( 
    <ScrollView>
    <View style={styles.aboutContainer}>
    
            <Text style={styles.TextContainer}>Restoran'a hoş geldiniz, burada mükemmel yemek sanatı olağanüstü misafirperverlikle buluşuyor. Biz, unutulmaz bir yemek deneyimi sunmaya ve duyuları tatmin eden, beklentileri aşan bir hizmet sunmaya adanmış seçkin bir mekanız.</Text>

            <Text style={styles.TextContainer}>Restoranızmız'da, en kaliteli malzemelerin seçiminden her bir yemeğin sanatsal sunumuna kadar titizlikle çalıştığımızı gururla söyleyebiliriz. Tutkulu şeflerimiz, sommelier'lerimiz ve garsonlarımız, yerel ve uluslararası mutfakların lezzetlerini sergileyen bir menüyü oluşturmak için uyum içinde çalışırlar.</Text>

            <Text style={styles.TextContainer}>Usta şeflerimizin geleneksel teknikleri yenilikçi mutfak kavramlarıyla ustaca harmanladığı bir lezzet şölenine dalın. Her bir yemek, hassasiyetle hazırlanmış olup, tatların ve dokuların uyumlu bir denge içinde olduğundan emin olmak için ustaca işlenir, sizi daha fazlasını istemeye yönlendirecek.</Text>

            <Text style={styles.TextContainer}>Mükemmelliğe olan bağlılığımız mutfaktan öteye uzanır. Sıcak ve bilgili personelimiz, kusursuz hizmet sunmaya adamıştır, her ihtiyacınıza özen gösterir ve yemeğinizin olağanüstü olmasını sağlar. Harika yemeklerin olağanüstü bir konukseverlikle birleşmesi gerektiğine inanıyoruz ve hem zarif hem de davetkar bir ortam yaratmayı amaçlıyoruz.</Text>

            <Text style={styles.TextContainer}>Bizi romantik bir akşam yemeği, iş toplantısı veya özel bir kutlama için ziyaret edin, size olağanüstü mutfak ve eşsiz hizmetimizle duyularınızı zirveye çıkaracağımızı taahhüt ediyoruz. Fine Dining'in incelikli atmosferinde kendinizi kaybedin, her ziyaret unutulmaz bir deneyim olacak.</Text>

            <Text style={styles.TextContainer}>Sizleri seçkin mekanımıza bekliyoruz ve son ısırık bile olsa hafızanızda kalacak anılar yaratmayı dört gözle bekliyoruz. Fine Dining'de mükemmel bir yemek deneyimine hazır olun..</Text>

    </View>
    </ScrollView>)
}
const styles=StyleSheet.create({
    aboutContainer:
    {
        marginTop:50,
        flex:1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
        marginBottom:50
    }
    ,
    TextContainer:{
    paddingHorizontal:20,
    letterSpacing:1,
    color:'black',
    lineHeight:30,
    fontWeight:"500",
    marginBottom:20
    }
})