<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route(
     *     "/",
     *     name="home"
     * )
     */
    public function home(): Response
    {
        $number = random_int(0, 100);

        return $this->render(
            'home.html.twig',
            [
            ]
        );
    }
    
    /**
     * @Route(
     *     "/presentation",
     *     name="presentation"
     * )
     */
    public function presentation(): Response
    {
        $number = random_int(0, 100);

        return $this->render(
            'presentation.html.twig',
            [
            ]
        );
    }
}