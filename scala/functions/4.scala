// def sumOpts(l: List[Option[Double]]): Option[Double] = {
//     l.foldLeft(Option[Double])((acc,elem)=>
//     (acc,elem) match{
//         case(None, None) => None
//         case(Some(elem), None) => Some(elem)
//         case (None, Some(elem))=> Some(elem)
//         case (Some(elem), Some(el))=> Some(elem+el)
//     })
// }

// def position[A](l: List[A], el: A): Option[Int] = {
//     val ind = l.indexOf(el)
//     if (ind != -1) Some(ind) else None
// }

// def indices[A](l: List[A], el: A): Set[Int] = {
//     l.zipWithIndex.filter(elem=> elem._1==el).map(elem=> elem._2).toSet
// }
// def swap[A](l: List[A]): List[A] = {
//   l.grouped(2).flatMap {
//     case List(a, b) => List(b, a)
//     case List(a)    => List(a)
//   }.toList
// }

// def sort(lista: List[String])={
//     lista.filter(elem => elem.stripPrefix("Europe/").length != elem.length). sortBy(elem=> elem.stripPrefix("Europe/").length)
// }

// def freq[A](l: List[A]): List[(A, Int)] = {
//     l.groupBy(elem=> elem).map((elem, group) => (elem, group.length)).toList
// }

// @main
// def rez7:Unit={
//     println(sumOpts(List(Some(5.4), Some(-2.0), Some(1.0), None, Some(2.6))))
//     println(position(List(2, 1, 1, 5),6))
//     val lista = List(1, 2, 1, 1, 5)
// println(indices(lista, 1)) // ==> Set(0, 2, 3).
// println(indices(lista, 7)) // ==> Set()
// println(swap(List(1,2,3,4,5)))
//     val strefy: List[String] = java.util.TimeZone.getAvailableIDs.toList
//     println(sort(strefy))
//     val lista1 = List('a','b','a','c','c','a')
// println(freq(lista1)) // ==> List(('a', 3),('b', 1),('c', 2))
// }


def sumOpts(l: List[Option[Double]]): Option[Double] = {
    val rez= l.foldLeft(None: Option[Double])((acc,elem)=>
    (acc,elem) match{
        case (None, None) => None
        case (Some(elem), None) => Some(elem)
        case (None, Some(elem)) => Some(elem)
        case (Some(a), Some(b))=> Some(a+b)
    })
    rez
}



def position[A](l: List[A], el: A): Option[Int] = {
    val ind = l.indexOf(el)
    if (ind == -1){
        None
    }
    else{
        Some(ind)
    }
}

def indices[A](l: List[A], el: A): Set[Int] = {
    l.zipWithIndex.filter(elem => elem._1==el).map(elem=> elem._2).toSet
}

def swap[A](l: List[A]): List[A] = {
  l.zipWithIndex.map{ case (elem, ind)=>
  if(ind%2==0 && ind+1< l.length) l(ind+1)
  else if(ind%2!=0)l(ind-1)
  else elem }
}

def freq[A](l: List[A]): List[(A, Int)] = {
    l.groupBy(elem => elem).map((elem, il)=> (elem, il.length)).toList
}

@main
def rez:Unit={
    println(sumOpts(List(Some(5.4), Some(-2.0), Some(1.0), None, Some(2.6))))
    println(position(List(2, 1, 1, 5),1))
    println(indices(List(1, 2, 1, 1, 5), 1))
    println(swap(List(1, 2, 3, 4, 5)))
    println(freq(List('a','b','a','c','c','a')))
}