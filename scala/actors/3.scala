// import org.apache.pekko.actor.{Actor, ActorRef, Props, ActorSystem}
//  case object Piłeczka2

// case class Graj02(przeciwnik: ActorRef, maks:Int)

// class Gracz02 extends Actor {
//     def receive : Receive = {
//         case Graj02(przeciwnik, maks) =>
//         println ("Ping!")
//         przeciwnik ! Piłeczka2
//         context.become(odbijanie(przeciwnik, maks-1))
//         case Piłeczka2 => 
//             println("Pong")
//             sender() ! Piłeczka2
//     }



//     def odbijanie(przeciwnik: ActorRef, remaining:Int) : Receive = {
//     case Piłeczka2 => 
//     if (remaining <=1){
//         context.system.terminate()
//     }
//     else{
//     println("Ping!")
//     przeciwnik ! Piłeczka2 
//     context.become(odbijanie(przeciwnik, remaining-1))
//     }}
// }
// @main
// def zad2:Unit = {
// val system = ActorSystem("PingPongSystem")
// val gracz1 = system.actorOf(Props[Gracz02](), name="gracz01")
// val gracz02 = system.actorOf(Props[Gracz02](), name = "gracz02")
// gracz1 ! Graj02(gracz02, 5)
// }


import org.apache.pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}


case object Piłeczka2
case class Graj02(przeciwnik: ActorRef, maks: Int)

class Gracz02 extends Actor {
  def receive: Receive = {
    case Graj02(przeciwnik, liczba) if liczba > 1 =>
      println("Ping")
      przeciwnik ! Piłeczka2
      context.become(odbijanie(przeciwnik, liczba - 2))
      
    case Graj02(przeciwnik, liczba) if liczba == 1 =>
      println("Ping")
      context.system.terminate()
      
    case Graj02(przeciwnik, liczba) if liczba <= 0 =>
      context.system.terminate()
      
    case Piłeczka2 =>
      println("Pong")
      sender() ! Piłeczka2
      
  }

  def odbijanie(przeciwnik: ActorRef, liczba: Int): Receive = {
    case Piłeczka2 if liczba == 0 =>
      context.system.terminate()
    case Piłeczka2 if liczba == 1 =>
      println("Ping")
      context.system.terminate()
    case Piłeczka2 if liczba == 2 =>
      println("Ping")
      println("Pong")
      context.system.terminate()
    case Piłeczka2 if liczba > 2 =>
      println("Ping")
      przeciwnik ! Piłeczka2
      context.become(odbijanie(przeciwnik, liczba - 2))
  }
}

@main 
def zad2: Unit = {
  val system = ActorSystem("Gra")
  val gracz1 = system.actorOf(Props[Gracz02](), "gracz1")
  val gracz2 = system.actorOf(Props[Gracz02](), "gracz2")
  gracz1 ! Graj02(gracz2, 6) 
}