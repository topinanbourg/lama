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
    public function home(string $currentHash = null): Response
    {
        return $this->render(
            'home.html.twig',
            [
                'currentHash' => $currentHash
            ]
        );
    }
    /**
     * @Route(
     *     "/lama-{currentHash}",
     *     name="displayLama",
     *     requirements={"currentHash"="[0A-Z]+"}
     * )
     */
    public function displayLama(string $currentHash): Response
    {
        return $this->home($currentHash);
    }
    
    
    /**
     * @Route(
     *     "/prez",
     *     name="prez"
     * )
     */
    public function prez(): Response
    {
        $number = random_int(0, 100);

        return $this->render(
            'presentation.html.twig',
            [
            ]
        );
    }
}