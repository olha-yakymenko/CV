// import org.apache.pekko.actor.{Actor, ActorRef, Props, ActorSystem, ActorLogging}

// // Komunikaty
// case class Init(liczbaPracowników: Int)
// case class Zlecenie(tekst: List[String])
// case class Wykonaj(tekst: String)
// case class Wynik(count: Int)

// // Aktor główny - Szef
// class Szef extends Actor {
//   def receive: Receive = waitingForInitialization

//   def waitingForInitialization: Receive = {
//     case Init(liczbaPracowników) =>
//       val workers = (1 to liczbaPracowników).map(i => context.actorOf(Props[Pracownik](), s"pracownik-$i")).toList
//       context.become(ready(workers))
//   }

//   def ready(workers: List[ActorRef]): Receive = {
//     case Zlecenie(tekst) =>
//       val totalTasks = tekst.size
//       var remainingTasks = tekst

//       tekst.zipWithIndex.foreach { case (line, index) =>
//         workers(index % workers.size) ! Wykonaj(line)
//       }
//       context.become(waitingForResults(sender(), 0, totalTasks, workers, remainingTasks))
//   }

//   def waitingForResults(senderRef: ActorRef, totalWords: Int, totalTasks: Int, workers: List[ActorRef], remainingTasks: List[String]): Receive = {
//     case Wynik(count) =>
//       val newTotalWords = totalWords + count
//       val newRemainingTasks = remainingTasks.tail
//       val newTasksLeft = newRemainingTasks.size
//       if (newTasksLeft == 0) {
//         println(s"Liczba słów: $newTotalWords")
//         senderRef ! "Koniec"
//         context.become(waitingForInitialization)
//       } else {
//         val nextTask = newRemainingTasks.head
//         val nextWorkerIndex = (totalTasks - newTasksLeft) % workers.size
//         workers(nextWorkerIndex) ! Wykonaj(nextTask)
//         context.become(waitingForResults(senderRef, newTotalWords, totalTasks, workers, newRemainingTasks))
//       }
//   }
// }

// class Pracownik extends Actor {
//   def receive: Receive = {
//     case Wykonaj(tekst) =>
//       val count = tekst.split("\\s+").length
//       sender() ! Wynik(count)
//   }
// }

// // Uruchomienie programu
// object Main extends App {
//   val system = ActorSystem("RozproszonyLicznikSlow")
//   val szef = system.actorOf(Props[Szef](), "Szef")
//   szef ! Init(5) // Inicjalizacja z 5 pracownikami
//   szef ! Zlecenie(List("To jest pierwszy tekst.", "To jest drugi tekst.", "To jest trzeci tekst."))
// }


import org.apache.pekko.actor.{Actor, ActorRef, Props, ActorSystem, ActorLogging}

case class Init(liczbaPracownikow: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj(s: String)
case class Wynik(wynik: Int)

class Szef extends Actor {
  def receive: Receive = {
    case Init(liczbaPracownikow: Int) =>
      val pracownicy = produkcjaPracownikow(liczbaPracownikow)
      context.become(receiveZlecenia(pracownicy))
  }

  def receiveZlecenia(pracownicy: List[ActorRef], suma: Int = 0, wyslane: Int = 0, przyslane: Int = 0): Receive = {
    case Zlecenie(tekst: List[String]) =>
      rozeslijPodzlecenia(tekst, pracownicy)
      context.become(receiveZlecenia(pracownicy, suma, tekst.length, przyslane))

    case Wynik(wynik: Int) =>
      if (przyslane + 1 < wyslane) {
        context.become(receiveZlecenia(pracownicy, suma + wynik, wyslane, przyslane + 1))
      } else {
        println(suma + wynik)
        context.become(receiveZlecenia(pracownicy))
      }
  }

  def produkcjaPracownikow(liczbaPracownikow: Int): List[ActorRef] = {
    (1 to liczbaPracownikow).map(i => context.actorOf(Props[Pracownik](), s"pracownik$i")).toList
  }

  def rozeslijPodzlecenia(lista: List[String], listaPracownikow: List[ActorRef]): Unit = {
    lista.zipWithIndex.foreach { case (element, index) =>
      val pracownik = listaPracownikow(index % listaPracownikow.length)
      pracownik ! Wykonaj(element)
    }
  }
}

class Pracownik extends Actor {
  def receive: Receive = {
    case Wykonaj(s: String) =>
      val lista_slow = s.split(" ")
      sender() ! Wynik(lista_slow.length)
  }
}

@main 
def main: Unit = {
  val system = ActorSystem("Licznik")
  val boss = system.actorOf(Props[Szef](), "szefito")
  boss ! Init(5)
  boss ! Zlecenie(List("ala ma kota", "kot ma ale", "kot", "ala", "ma", "fifa rafa", "rafa fifa", "lololo lo lo"))
}
