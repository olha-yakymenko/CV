def oczyśćListę[A](l: List[A]): List[A] = {
    @annotation.tailrec
    def help[A](l: List[A], acc: List[A]): List[A]=l match{
        case Nil => acc
        case h1::h2::tail if(h1==h2)=> help(h2::tail, acc)
        case h1::h2::tail=> help(h2::tail, h1::acc)
        case h1::Nil=>  h1::acc
    }
    help(l, Nil).reverse
}


def skompresuj[A](l: List[A]): List[(A, Int)] = {
    @annotation.tailrec
    def help[A](l: List[A], liczba: Int, acc: List[(A, Int)]): List[(A,Int)]= l match {
        case h1::h2::tail if (h1==h2)=> help(h2::tail, liczba+1, acc)
        case h1::h2::tail => help(h2::tail, liczba=0, (h1, liczba+1)::acc)
        case h1:: tail=> help(tail, liczba+1,(h1, liczba+1)::acc)
        case h1::h2::Nil if(h1==h2)=> help(Nil, liczba+1, acc)
        case h1::h2::Nil => help(Nil, liczba=0, (h1, liczba+1)::acc)
        case Nil=> acc
    }
    help(l, 0, Nil).reverse
}

// def isOrdered[A](leq: (A, A) => Boolean)(l: List[A]): List[A] = {
//     @annotation.tailrec
//     def help(l: List[A], acc:List[A]): List[A]=l match{
//         case h1::h2::tail if(leq(h1,h2))=> help(h2::tail, h1::acc)
//         case h1::h2::tail => help(h2::tail, acc)
//         case h1::Nil =>  h1::acc
//         case Nil=> acc
//     }
//     help(l, Nil).reverse
// }

def isOrdered[A](leq: (A,A)=> Boolean)(l: List[A]): Boolean={
    @annotation.tailrec
    def help(l: List[A]): Boolean=l match{
        case Nil=> true
        case h1::Nil=> true
        case h1::h2::tail=>
        if(leq(h1,h2)) help(h2::tail)
        else false
    }
    help(l)
}

def applyForAll[A, B](f: A => B)(l: List[A]): List[B]  = {
    @annotation.tailrec
    def help(l: List[A], acc: List[B]): List[B]= l match {
        case h1::tail=> help(tail, f(h1)::acc)
        case Nil=> acc.reverse
    }
    help(l, Nil)
}

@main
def rez5: Unit={
    println(oczyść(List(1, 1, 2, 4, 4, 4, 1, 3)))
    println(skompresuj(List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')))
    val lt = (m: Int, n: Int) => m < n
val lte = (m: Int, n: Int) => m <= n
val lista = List(1, 2, 2, 5)
println(isOrdered(lt)(lista)) // ==> false
println(isOrdered(lte)(lista)) // ==> true
val lista1 = List(1, 3, 5)
val f = (n: Int) => n + 3
println(applyForAll(f)(lista1)) // ==> List(4, 6, 8)
}