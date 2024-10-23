

// @main
//   def ruun: Unit = {
//     val lines = Source.fromFile("nazwiska.txt").getLines.filter(_.nonEmpty).toList
//     val names = lines.map { line =>
//       val Array(imie, nazwisko) = line.split(" ",2)
//       (imie, nazwisko, imie.distinct.length, nazwisko.distinct.length)
//     }
//    val maxImieLength = names.map(_._3).max
//   val maxByMin = names.filter(_._3 == maxImieLength).minBy(_._4)
//   println(maxByMin)
// }

 import scala.io.Source

// @main
// def ruun: Unit = {
//   val lines = Source.fromFile("nazwiska.txt").getLines.filter(_.nonEmpty).toList
//   val names = lines.map { line =>
//     val Array(imie, nazwisko) = line.split(" ", 2)
//     (imie, nazwisko, imie.distinct.length, nazwisko.distinct.length)
//   }
//   val max = names.map(_._3).max
//   val minByMax = names.filter(_._3 == max).minBy(_._4)
//   println(minByMax)
// }


// import scala.io.Source

// def histogramm(max: Int): String = {
//   val text = Source.fromFile("ogniem_i_mieczem.txt").mkString
//   val letters = text.toCharArray.filter(_.isLetter).map(_.toLower).groupBy(identity).mapValues(_.length)
//   val maxim = letters.values.max
//   val scaled = if (maxim > max) {
//     letters.mapValues(freq => (freq * max) / maxim)
//   } else {
//     letters
//   }
//   val sorted = scaled.toList.sortBy(-_._2)

//   val hstr = sorted.map { case (letter, freq) =>
//     val j = "*" * freq
//     s"$letter: $j"
//   }.mkString("\n")
//   hstr
// }

// @main
// def mainn: Unit = {
//   val maxHistogramWidth = 50
//   val result = histogramm(maxHistogramWidth)
//   println(result)
// }

// @main
// def p : Unit={
//   val lines= Source.fromFile("nazwiska.txt").getLines.toList
//   val names= lines.map{ case line => 
//   val Array(imie, nazwisko)= line.split(" ",2)
//   (imie,nazwisko,  imie.distinct.length, nazwisko.distinct.length) }
//   val max= names.map(_._3).max
//   val min= names.filter(_._3==max).minBy(_._4)
//   println(min)
// }


def histogram(max: Int): String = {
  val text = Source.fromFile("ogniem_i_mieczem.txt").mkString
  val letter = text.filter(_.isLetter).toLowerCase.groupBy(identity).mapValues(_.length)
  val maxx = letter.values.max
  val scaled = if (maxx > max) {
    letter.mapValues(freq => (freq * max) / maxx)
  } else {
    letter
  }
  val sorted = scaled.toList.sortBy(-_._2)

  val histogramString = sorted.map ( (letter, freq) =>
    val bar = "*" * freq
    s"$letter: $bar"
  ).mkString("\n")

  histogramString
}

@main
def d(max: Int): Unit={
  println(histogram(max))
}