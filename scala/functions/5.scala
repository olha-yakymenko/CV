val secret = List(1, 3, 2, 2, 4, 5)
val guess  = List(2, 1, 2, 4, 7, 2)
val black  = secret.zip(guess).count((s,g)=> s==g)
val white  = secret.intersect(guess).distinct.length

// @main
// def rez1:Unit={
//     println(black)
//   println(white)
// }



case class CzesciowaOcena(imie: String, nazwisko: String, ocenaWdzięku: Int, ocenaSprytu: Int)
case class OstatecznaOcena(imie: String, nazwisko: String, ocena: Double, miejsce: Int)

def obliczOstateczneOceny(oceny: List[CzesciowaOcena]): List[OstatecznaOcena] = {
  val ostateczneOceny = oceny.groupBy(ocena => (ocena.imie, ocena.nazwisko)).toList.map { case ((imie, nazwisko), oceny) =>
    val sumaWdzięku = oceny.map(_.ocenaWdzięku).sum.toDouble
    val sumaSprytu = oceny.map(_.ocenaSprytu).sum.toDouble
    val sredniaw = if (sumaWdzięku == 0 || oceny.length == 0) 0 else sumaWdzięku / oceny.length
    val srednias = if (sumaSprytu == 0 || oceny.length == 0) 0 else sumaSprytu / oceny.length
    OstatecznaOcena(imie, nazwisko, (srednias + sredniaw) / 2, 0)
  }

  val sorted = ostateczneOceny.sortBy(ocena => (-ocena.ocena, ocena.nazwisko, ocena.imie))

  val maks = 100.0 * 2
  sorted.foldLeft((List.empty[OstatecznaOcena], maks, 0)) { case ((acc, poprzedniaOcena, poprzednieMiejsce), ocena) =>
    val aktualneMiejsce = if (ocena.ocena < poprzedniaOcena) acc.length + 1 else poprzednieMiejsce
    val ostatecznaOcena = ocena.copy(miejsce = aktualneMiejsce)
    (ostatecznaOcena :: acc, ocena.ocena, aktualneMiejsce)
  }._1.reverse
}

def obl(oceny: List[CzesciowaOcena]): List[OstatecznaOcena]={
  val ost= oceny.groupBy(ocena => (ocena.imie, ocena.nazwisko)).toList.map{ case ((imie, nazwisko), oceny)=>
  val sumaw = oceny.map(_.ocenaWdzięku).sum.toDouble
  val sumas = oceny.map(_.ocenaSprytu).sum.toDouble
  val sredniaw = if(sumaw == 0 || oceny.length ==0) 0 else sumaw / oceny.length
  val srednias = if(sumas == 0 || oceny.length==0) 0 else sumas / oceny.length
  OstatecznaOcena(imie, nazwisko, (srednias + sredniaw) / 2, 0)
  }
  val sorted = ost.sortBy( ocena=> (-ocena.ocena, ocena.nazwisko, ocena.imie ))
  val maks = 100.0*2
  sorted.fildLeft((List.empty[OstatecznaOcena], maks, 0)){
    case ((acc, poprzedniaOcena, poprzednieMiejsce), ocena )=>
    val akm= if (ocena.ocena < poprzedniaOcena) acc.length+1 else poprzednieMiejsce
    val osto = ocena.copy(miejsce=akm)
    (ostatecznaOcena :: acc, ocena.ocena, akm)
  }._1.reverse
}

@main
def main: Unit = {
  val partialScores = List(
    CzesciowaOcena("John", "Doe", 18, 15),
    CzesciowaOcena("Jane", "Smith", 15, 18),
    CzesciowaOcena("John", "Doe", 16, 17),
    CzesciowaOcena("Jane", "Smith", 18, 15),
    CzesciowaOcena("Alice", "Jones", 17, 14),
    CzesciowaOcena("Bob", "Brown", 16, 20)
  )

  val finalScores = obliczOstateczneOceny(partialScores)

  println("Final Scores:")
  finalScores.foreach { score =>
    println(s"${score.imie} ${score.nazwisko} - Score: ${score.ocena}, Place: ${score.miejsce}")
  }
}

def threeNumbers(n: Int): List[(Int, Int, Int)] = {
  val triples = for {
    a <- 1 to n
    b <- a + 1 to n
    c = Math.sqrt(a * a + b * b).toInt
    if c * c == a * a + b * b && c <= n
  } yield (a, b, c)
  triples.toList
}


@main
def rez3: Unit={
    println(threeNumbers(10))
}

