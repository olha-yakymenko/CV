def subseq[A](list: List[A], begIdx: Int, endIdx: Int): List[A] = {
    list.drop(begIdx).take(endIdx-begIdx)
}

def pairPosNeg(list: List[Double]): (List[Double], List[Double]) = {
    list.filter(elem => elem != 0.0).partition(elem => elem < 0)
}

def deStutter[A](list: List[A]): List[A] = {
    list.foldLeft(Nil) { (acc, elem) =>
        acc match {
            case Nil => List(elem)
            case h1 :: tail => if (h1 == elem) acc else elem :: acc
        }
    }.reverse
}
def remElems[A](list: List[A], k: Int): List[A] = {
    list.zipWithIndex.filter(elem => elem._2 != k).map(_._1)
}


def freqMax[A](list: List[A]): (Set[A], Int) = {
  val grouped = list.groupBy(identity) // Grupowanie elementów listy według ich wartości
  val mapped = grouped.mapValues(_.size) // Mapowanie grup na liczbę wystąpień
  val maxFrequency = mapped.values.max // Znalezienie maksymalnej liczby wystąpień
  val elementsWithMaxFrequency = mapped.filter ( (_, count) => count == maxFrequency ).keys.toSet // Zbiór elementów o maksymalnej liczbie wystąpień
  (elementsWithMaxFrequency, maxFrequency) // Zwracanie pary (zbiór elementów, maksymalna liczba wystąpień)
}

@main
def rez6:Unit={
    println(subseq(List(2,3,4,5,6,76,8,8,7),2,5))
    println(pairPosNeg(List(2.1,4.5,6.7,0.0,-5.6)))
    val l = List(1, 1, 2, 4, 4, 4, 1, 3)
    println( deStutter(l) == List(1, 2, 4, 1, 3) )
    println(remElems(List(2,3,5), 0))
    println(freqMax(List(1, 1, 2, 4, 4, 3, 4, 1, 3)))
}
